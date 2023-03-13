let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(255, 255, 200);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vx = 0;
    this.vy = 0;
    this.r = random(5, 15);
    this.color = color(random(255), random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255),random(255), random(255), random(100, 200));
  }
  
  update() {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let dist = sqrt(dx*dx + dy*dy);
    let acc = dist < 50 ? 50 : 0;
    this.vx += dx * 0.0005 * acc;
    this.vy += dy * 0.0005 * acc;
    this.vx *= 0.95;
    this.vy *= 0.95;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < -this.r || this.x > width + this.r || this.y < -this.r || this.y > height + this.r) {
      this.x = random(width);
      this.y = random(height);
    }
  }
  
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
