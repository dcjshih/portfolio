/*
 * @name Brownian Motion
 * @arialabel A continuous white line draws squiggles on a grey background
 * @description Recording random movement as a continuous line.
 * Port of original example from the Processing examples page.
 */

let num = 2000;
let range = 75;

let ax = [];
let ay = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < num; i++) {
        ax[i] = width / 2;
        ay[i] = height / 2;
    }
    frameRate(30);
}

function draw() {
    background(250, 249, 247);

    // Shift all elements 1 place to the left
    for (let i = 1; i < num; i++) {
        ax[i - 1] = ax[i];
        ay[i - 1] = ay[i];
    }

    // Put a new value at the end of the array
    ax[num - 1] += random(-range, range);
    ay[num - 1] += random(-range, range);

    // Constrain all points to the screen
    ax[num - 1] = constrain(ax[num - 1], 0, width);
    ay[num - 1] = constrain(ay[num - 1], 0, height - 10);

    // Draw a line connecting the points
    for (let j = 1; j < num; j++) {
        // let val = j / num * 204.0 + 51;
        stroke(65, 56, 42);
        line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    }
}