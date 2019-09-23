class Box {

  constructor(x, y, z, r_) {
    this.pos = new p5.Vector(x, y, z);
    this.r = r_;
  }

  show(angle) {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    fill(245, 22, 245);
    box(this.r);
    pop();
  }

  generate() {
    var arrayBoxes = [];
    for (var x = -1; x < 2; x++) {
      for (var y = -1; y < 2; y++) {
        for (var z = -1; z < 2; z++) {
          var sum = abs(x)  + abs(y)  + abs(z);
          if (sum > 1) {
            var newR = this.r/3;
            var b = new Box(this.pos.x + x*newR, this.pos.y + y*newR, this.pos.z + z*newR, newR);
            arrayBoxes.push(b);
          }
        }
      }
    }
    return arrayBoxes;
  }
}
