//  Will Kreidler
// 	0130
//  This is a comment
//  The setup function function is called once when your program begins

var distance;
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
    //bounces of edges
    if(this.loc.x<0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x>width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y<0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y>height){
      this.vel.y = -this.vel.y;
    }
  }

  update(){
    //movement
    this.loc.x= this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y;
  }
  render(){
    //draws lines
    for (var i=0; i<Boids.length; i++){
      distance = this.loc.dist(Boids[i].loc);
      if(distance < 50){
        line(this.loc.x,this.loc.y,Boids[i].loc.x,Boids[i].loc.y)
      }
      if(distance > 50){
        line(this.loc.x,this.loc.y,Boids[i].loc.x,Boids[i].loc.y)
        stroke(random(0, 250), random(0, 250),random(0, 250),)
      }
    }
  }//end render
}//end Boid class
