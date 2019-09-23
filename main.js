var angle = 0;

var sponge = [];

function setup(){
  createCanvas(1680, 1045, WEBGL);
  b = new Box(0, 0, 0, 400);
  sponge.push(b);
}

function draw(){
  background(0);

  rotateX(angle);
  rotateY(angle*0.4);
  rotateZ(angle*0.1);
  lights();

  for (var i = 0; i < sponge.length; i++) {
    sponge[i].show(angle);
  }

  angle += 0.01;
}

function mousePressed() {
  var next = [];
  var newBoxes;

  for (var i = 0; i < sponge.length; i++) {
    newBoxes = sponge[i].generate();

    next = next.concat(newBoxes);
  }

  sponge = next;
}
