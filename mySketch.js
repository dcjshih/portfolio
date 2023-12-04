let tdMahomes = [41, 37, 38, 26, 5];
let intMahomes = [12, 13, 6, 5, 12];
let jogadores = ["Patrick Mahomes", "Justin Herbert", "Joe Burrow", "Russel Wilson", "Derek Carr"]

function setup() {
    // Create a canvas with the size of the containing div
    createCanvas(400, 400);
    console.log(jogadores[0]);

    frameRate(1)


}

function draw() {


    let sorteioCorFundo = random(0, 1);
    let sorteioCorFundoRound = round(sorteioCorFundo);

    let sorteioCor = random(0, 1);
    let sorteioCorRound = round(sorteioCor);

    let sorteioCinzaF = random(0, 255);
    let sorteioCinzaQ = random(0, 255);

    let sorteioQuadradoR = random(0, 255);
    let sorteioQuadradoG = random(0, 255);
    let sorteioQuadradoB = random(0, 255);



    if (sorteioCorFundoRound == 1) {
        background(250, 249, 247);
    }





    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {

            let aleatorio = random(0, 90)

            noStroke();
            if (sorteioCorRound == 0) {
                fill(sorteioCinzaF);
                rect(80 + (134 * j), 40 + (160 * i), aleatorio, 120);
            } else if (sorteioCorRound == 1) {
                fill(sorteioQuadradoR, sorteioQuadradoG, sorteioQuadradoB);
                rect(80 + (134 * j), 40 + (160 * i), aleatorio, 120)
            }
        }
    }


    if (sorteioCor == 0) {
        let sorteioCinzaF = random(0, 255);
        let sorteioCinzaQ = random(0, 255);

    }

    // if (sorteio == 1) {

}

// function windowResized() {
//     const containerWidth = document.getElementById('p5-container').offsetWidth;
//     const containerHeight = document.getElementById('p5-container').offsetHeight;

//     resizeCanvas(containerWidth, containerHeight);
// }

// Call windowResized whenever the window is resized
// window.addEventListener('resize', windowResized);
document.getElementById('p5-container').appendChild(canvas.elt);