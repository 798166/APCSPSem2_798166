//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
class Food{
  constructor(x,y,w,id){
    this.loc=createVector(x,y);
    this.w=w;
    this.clr=color(37, 89, 56);
    this.id=id;
  }

  run(){
    this.render();
    this.update();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x*this.w,this.loc.y*this.w,this.w,this.w);
  }

  update(){

    }

}
