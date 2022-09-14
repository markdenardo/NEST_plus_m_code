var x, y;

function setup() {
	createCanvas(500, 500);
}

function draw(){
	background(0, 220, 204);
	fill(0, 25, 149);
	stroke(0);
	
	translate(width/2, height/2);
	
	for (i=0; i < 100; i++){
		push();
		rotate(i*100 / 15.0);
		scale(i / 16.0);
		ellipse(i,i, 100, 100);
		pop();
	}
  fill(255,0,0)
ellipse(0,-100,50,50)
  fill(0,0,0)
  ellipse(100,0,50,50)
  fill(0,0,0)
    ellipse(0,100,50,50)
  fill(0,0,0)
      ellipse(-100,0,50,50)
  fill(0,0,0)
  
  
}

