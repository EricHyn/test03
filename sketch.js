function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rectMode(CENTER);
  guy(50);
}

function guy(size) {
  if (mouseX < width - size/2 && 
    mouseX > 0) {
    var move = mouseX;
  }
  rect(move, height - size/2, size, size);
  
}
