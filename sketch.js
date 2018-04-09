function setup() {
	createCanvas(1200, 300);
	rectMode(CENTER)
}

function draw() {
	background(127, 0, 0);

	//Under Arch
	noStroke();
	fill(0, 127, 175);
	arc(600,300,850,200,0,0,CHORD);
	//top sky
	rect(600, 40, 1200, 80);
	rect(0,80,15,15);
	rect(1200,80,16,16);
	//hand rail
	stroke(127,0,50,255);
	strokeWeight(5);
	line(12,80,1188,80);
	//gap fixing
	noStroke();
	fill(127,0,0,255);
	rect(1193,88,2,2);
	//handrail curved ends
	stroke(127,0,50,255);
	strokeWeight(5);
	fill(127,0,0);
	arc(15,97,30,30,PI,PI+QUARTER_PI,CHORD);
	line(1188,80,1200,90)
	//cleanup
	noStroke();
	fill(0,127,175);
	rect(600, 40, 1200, 76);
}
