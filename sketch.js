
var bgshade=0
var img;
var hedero;

function preload() {
img = loadImage('Rainbow.gif');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(bgshade);
	hedero = loadSound('Hedero.wav');

}

function draw() {

}

function keyPressed() {
	if (bgshade === 0) {
		bgshade = 255;
		background(bgshade);
		image(img, 0, 0, 1930, 1930);
		textSize(128);
		textAlign(CENTER);
		textStyle(BOLD);
		text('YOU HAVE BEEN INVADED', 960, 430);
		text('BY THE GAYS', 960, 650);
		masterVolume(3);
		hedero.loop();


	} else {
		return false;
	}
}
