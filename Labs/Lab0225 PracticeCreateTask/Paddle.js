//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
class Paddle{
  constructor(x, y, w, h){
    this.loc = createVector(x,y);
    this.clr = color(random(255), random(255), random(255));
    this.w = 300;
    this.h = 25;
    }
    run(){
    this.update();
    this.render();
  }

  update(){
    var mouseLoc = createVector(mouseX, 700)
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, 0.09);
  }

  render(){
    //this.clr = color(random(255), random(255), random(255));
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
