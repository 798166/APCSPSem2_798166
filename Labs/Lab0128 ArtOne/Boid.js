//  Will Kreidler
// 	0130
//  This is a comment
//  The setup function function is called once when your program begins
class Boid{
  constructor(x, y, dx, dy, n){
    this.loc = createVector(x, y);//location vector
    this.vel = createVector(dx, dy);//velocity vector
    this.acc = createVector(0, 0);//acceleration vector
    this.clr = color(random(0, 255), random(0, 255), random(0, 255), 10);//line color
    this.id = n;
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
      this.loc.x = 0;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x
      this.loc.x = width;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y
      this.loc.y = 0;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y
      this.loc.y = height;
    }
  }//checkEdges end
  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(5);
    this.acc.x = random(-1, 1);//random acceleration
    this.acc.y = random(-1, 1);
  }//update end
  render(){
    stroke(this.clr);
    var distToBoid;//creates s distance variable
    for(var i = 0; i < boids.length; i++){
      if(i === this.id){}else {//ignores itself
        distToBoid = this.loc.dist(boids[i].loc);//sets distance to  selected boid
        if(distToBoid < 100){
          line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
        }//draws line if boid is within 200 spaces
      }
    }
  }//render end
}//end boid class
