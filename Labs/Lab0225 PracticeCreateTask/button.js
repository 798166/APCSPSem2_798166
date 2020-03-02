//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

class Button{
   constructor(x, y, h, w, msg,  clr){
     this.loc = createVector(x, y);
     this.h = h;
     this.w = w;
     this.msg = msg;
     this.clr = color(random(255), random(255), random(255))
   }//end of constructor
   run(){
     this.render();
     this.checkEdges();
   }//end of run

    render(){
      fill(this.clr);
      rect(this.loc.x,this.loc.y,this.w,this.h);
      textSize(25);
      fill(2, 2, 2)
      text(this.msg, this.loc.x, this.loc.y - 20);
   }//end of render

   checkEdges(){
     if(mouseIsPressed &&
     mouseX > 200 &&
     mouseX < 260 &&
     mouseY > 600 &&
     mouseY < 660 &&
      this.msg === 'Easy'){
       gameMode = 1;
       gameState = 2;
     }else if(mouseIsPressed &&
     mouseX > 400 &&
     mouseX < 460 &&
     mouseY > 600 &&
     mouseY < 660 &&
      this.msg === 'Medium'){
       gameMode = 2;
       gameState = 2;
     }else if(mouseIsPressed &&
     mouseX > 600 &&
     mouseX < 660 &&
     mouseY > 600 &&
     mouseY < 660 &&
      this.msg === 'Hard'){
       gameMode = 3;
       gameState = 2;
     }
   }
}
