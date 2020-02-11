//  Will Kreidler
// 	0130
//  This is a comment
//  The setup function function is called once when your program begins

class Boid {
 constructor(x,y,dx,dy){  //factors of boid, location, velocity, acceleration, color
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), 167, random(255));
 }
 run(){
   this.update();
   this.render();
   this.checkEdges();
 }
 update(){
this.vel.limit(3);  //setting velocity of boid to three
this.vel.add(this.acc);  //add acceleration to velocity
this.loc.add(this.vel);  //add velocity to acceleration
 }

 render(){
for (var i = boids.length-1; i>0; i--){  //determine if boids are less than 200 pixels apart
  if(this.loc.dist(boids[i].loc)<200){
    stroke(this.clr);  //draw line
    line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
  }
}
 }
 checkEdges(){  //boids bounce off edges of screen
   if(this.loc.x < 0){
     this.vel.x = -this.vel.x;
   }
   if(this.loc.x > width){
     this.vel.x = -this.vel.x;
   }
   if(this.loc.y < 0){
     this.vel.y = -this.vel.y;
   }
   if(this.loc.y > height){
     this.vel.y = -this.vel.y;
 }
}
}
