// pattern 0001
// fjenett 20100523

//float w8, h8;  // width, height div 8

function setup() {
    createCanvas(600, 600, SVG);

    smooth();

    w8 = width / 8.0;
    h8 = height / 8.0;
}

function draw() {
    background(255);
    strokeWeight(2);

    for (ix = 0; ix < 8; ix++) {
        for (iy = 0; iy < 8; iy++) {

            choice = int(random(3));

            switch (choice) {
                case 0:
                    rect(ix * w8, iy * h8, w8, h8);
                    break;
                case 1:
                    line(ix * w8, iy * h8 + h8, ix * w8 + w8, iy * h8);
                    break;
                case 2:
                    for (i = 0; i < 9; i++) {
                        line(ix * w8, iy * h8 + i * w8 / 8, ix * w8 + w8, iy * h8 + i * w8 / 8);
                    }
            }
        }
    }

    noLoop(); // stop looping draw()
}

function mousePressed() {
    redraw(); // start looping draw()
}

function keyPressed() {
    if (key === "s" || key === "S") save('pattern.svg');
}