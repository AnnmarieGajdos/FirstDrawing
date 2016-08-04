function setup() {
  createCanvas(600,600);
   fill(196,6,209);
rect (200,200,300,300);
rect (100,100,100,100);
fill (233,37,247);
rect (100,100,50,50)
rect (200,200,150,150)
fill(0,24,122)
triangle(100,100,400,400,500,500);
fill (255,238,0);
rect (30,20,65,70,40);
}

function drawSquare(x,y,side) {
  rectangle (x,y,side,side);
}

function drawCircle(x,y,diameter)  {
  ellipse(x,y,diameter,diameter);
}
  
function draw() {
  fill (255,196,0);
  drawCircle(60,60,60);
}



