let clusters = [];
let hulls = [];

function setup() {
    let canvasContainer = select('#canvas-container');
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent(canvasContainer)
    let size2 = min(width, height) * 7 / 6;
    noStroke();
    fill(250, 249, 247);

    let points = [];
    for (let i = 0; i < 20000; i++) {
        points.push(createVector(width / 2 + random(-size2 / 2, size2 / 2), height / 2 + random(-size2 / 2, size2 / 2)));
    }

    clusters = divide(points);
    hulls = [convexHull(clusters[0]), convexHull(clusters[1])];
}

function draw() {
    // background("#2560AC");
    background("#41382A")
    for (let hull of hulls) {
        if (hull.length > 3) {
            beginShape();
            for (let p of hull) {
                vertex(p.x, p.y);
            }
            endShape(CLOSE);
        }
    }
}

function mouseReleased() {
    let p = createVector(mouseX, mouseY);
    let argmin = -1;
    let minDist = width * height;

    for (let i = 0; i < clusters.length; i++) {
        for (let q of clusters[i]) {
            let d = distSquared(p, q);
            if (d < minDist) {
                argmin = i;
                minDist = d;
                continue;
            }
        }
    }

    if (hulls[argmin].length > 5) {
        let clu = clusters.splice(argmin, 1)[0];
        let newClusters = divide(clu);
        clusters = [...clusters, ...newClusters];
        hulls.splice(argmin, 1);
        hulls = [...hulls, convexHull(newClusters[0]), convexHull(newClusters[1])];
    }

    return false;
}

// divide points into two convex clusters
function divide(points) {
    let clusters = [];

    // initialize centroids randomly
    let centroids = [];
    for (let i = 0; i < 2; i++) {
        let c;
        do {
            c = random(points);
        } while (centroids.indexOf(c) != -1)
        centroids.push(c);
        clusters.push([]);
    }

    // assign clusters
    for (let p of points) {
        let argmin = 0;
        let minDist = distSquared(p, centroids[0]);
        for (let i = 1; i < 2; i++) {
            let d = distSquared(p, centroids[i]);
            if (d < minDist) {
                minDist = d;
                argmin = i;
            }
        }
        clusters[argmin].push(p);
    }

    return clusters;
}

function convexHull(points) {
    // adapted from https://en.wikipedia.org/wiki/Gift_wrapping_algorithm#Pseudocode
    points.sort((p, q) => p.x - q.x);
    let hull = [];
    let i = 0;
    let endPoint;
    let pointOnHull = points[0];
    do {
        hull.push(pointOnHull);
        endPoint = points[0];
        for (let j = 0; j < points.length; j++) {
            let p = p5.Vector.sub(endPoint, pointOnHull);
            let q = p5.Vector.sub(points[j], pointOnHull);
            if (endPoint.equals(pointOnHull) || (p.cross(q)).z < 0) {
                endPoint = points[j];
            }
        }
        i++;
        pointOnHull = endPoint;
    } while (!endPoint.equals(points[0]));
    return hull;
}

function distSquared(p, q) {
    return sq(p.x - q.x) + sq(p.y - q.y);
}