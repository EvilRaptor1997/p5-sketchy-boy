// sketch.js

const tiles = [];

function preload() {
    tiles[0] = loadImage("blank.png");
    tiles[1] = loadImage("up.png");
    tiles[2] = loadImage("right.png");
    tiles[3] = loadImage("down.png");
    tiles[4] = loadImage("left.png");
}



function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
    for (let i = 0; i < 4; i++) {
        image(tiles[i], i * 50, 0);
    }
    image(tiles[4], 0, 50);
}
