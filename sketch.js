let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {


  let gravity = createVector(0.03, 0.5);
  ball.addForce(gravity);

  ball.update();
  ball.show();
}


class Particle {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 1);
    this.acc = createVector(-3, 10);

    this.c = color(0);
    this.w = 50;
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }


  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -0.8;
      this.pos.y = height;
    }
    
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
  }


  show() {
      background(this.pos.x/2,this.pos.y/2,100);
    fill(this.c);
    rect(this.pos.x+10,this.pos.y-50,this.w/4, this.w*2);
  }
}