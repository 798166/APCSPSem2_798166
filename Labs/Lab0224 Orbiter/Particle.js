//  Will Kreidler
// 	0130
//  This is a comment
//  The setup function function is called once when your program begins

class Particle{
  constructor(x, y){//particle constructors
    this.loc = createVector(x, y);
    this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3));
    this.acc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    this.rad = random(11, 22);
    this.clr = color(random(255), random(255), random(255));
    this.fclr = color(random(255), random(255), random(255), 10);
    this.orbiters = [];
    this.loadOrbiters(1);//calls the loadOrbiters function
    this.angle = random(TWO_PI);
  }

  loadOrbiters(x){
    for(var i = 0; i < x; i++){
      this.orbiters.push(new Orbiter(5, color(5, 5, 5)));//pushes a new orbital onto the array
    }
  }

  run(){//runs particle functions
    this.update();
    this.render();
    this.checkEdges();
  }

  update(){
    this.acc.x = random(-0.5, 0.5);//sets the acceleration to a random value within parameters
    this.acc.y = random(-0.5, 0.5);//sets the velocity to a random value within parameters
    this.vel.add(this.acc);//adds acceleration to velocity
    this.vel.limit(7);//limites how fast the particles can go
    this.loc.add(this.vel);//makes the particles move
    this.rad += 0.02;
    this.angle += 0.41;
  }

  render(){
    fill(5, 5, 5);
    ellipse(this.loc.x, this.loc.y, 50, 50);//creates the particles
    fill(color(255, 0, 0));
    for(var i = 0; i < this.orbiters.length; i++){//makes the orbiters rotate around the particles
      var ox = this.loc.x + 30*cos(this.angle);
      var oy = this.loc.y + 30*sin(this.angle);
      ellipse(ox, oy, 5);
    }
    strokeWeight(0.25);
    stroke(this.clr);
  }

  checkEdges(){//makes the particles bounce when they hit the edge of the screen
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
      this.acc.x = -this.acc.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
      this.acc.x = -this.acc.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
      this.acc.y = -this.acc.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.acc.y = -this.acc.y;
    }
  }
}
