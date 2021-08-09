
function setup() {
  createCanvas(400,400);
  background("white");
  fill("black");
  text("Type the first letter of the colours of the rainbow to switch the background.",0,50);
}

function draw() {
  if (keyDown('r')) {
    background("red");
    typed()
  }
  if (keyDown('o')) {
    background("orange");
     typed()
  } 
  if (keyDown('y')) {
    background("yellow");
    typed()
  }
  if (keyDown('g')) {
    background("lime");
    typed()
  }
  if (keyDown('b')) {
    background("cyan");
    typed()
  }
  if (keyDown('i')) {
    background("darkblue");
    typed()
  }
  if (keyDown('v')) {
    background("indigo");
    typed()
  }
}

function typed() {
  fill("black");
  text("Type the first letter of the colours of the rainbow to switch the background.",0,50);
}