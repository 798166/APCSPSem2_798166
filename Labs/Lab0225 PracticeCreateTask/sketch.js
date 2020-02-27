//  Will Kreidler
// 	1031

segments=[];
numberFood=0;
food=[];
score=0;
gameState=1;
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235, 64, 52);
  endGame='no';
  hitFood='no';
  loadHead();
  loadFood();
  frameRate(14);
}

function draw() {
  if(gameState===1){
    startScreen();
  }
  if(gameState===2){
    playGame();
  }
  if(gameState===3){
    finalScreen();
  }
  if(gameState===4){
    instructionScreen();
  }
}

function startScreen(){
  background(235, 64, 52);
  textSize(75);
  fill(37, 48, 89);
  text('Snake Game',200,200);
  textSize(25);
  fill(0,0,0)
  text('Instructions: Use the arrow keys to move the snake.',180,350);
  text('Try and eat as much food as possible without touching',180, 375);
  text('the edge or your body. Good Luck!!',180, 400);
  textSize(25);
  fill(0,255,0)
  text('Start',375,550);
  rect(375,575,50,50);
  fill(0,0,255);
  if(mouseIsPressed&&
      mouseX>375&&
      mouseX<425&&
      mouseY>575&&
      mouseY<625){
        clear();
        gameState=2;
      }
}

function playGame(){
  runSnake();
  runFood();
  if(hitFood==='yes'){
    numberFood=numberFood+1;
    hitFood='no';
  }
if (endGame==='yes'){
  clear();
  gameState=3;
}
}

function finalScreen(){
  background(20,20,20);
  textSize(25);
  fill(255,0,0);
  text('You DIED! You got low score of '+ numberFood, 225,400);
  text('Want to play again? Press reload on the tab!', 225,525);
  textSize(100);
  fill(255,0,0);
  text('ERROR',225,250);
  //if(keyIsPressed&&
    //keyCode===SHIFT){
      //clear();
      //gameState=1;
  //}
}

function loadHead(){
  head= new Snake(0,0,0,0,20,color(52, 89, 235));
}

function loadFood(){
  food[0]= new Food(int(random(40)),int(random(40)),20,0);
}

function runFood(){
  food[0].run();
}

function runSnake(){
  background(235, 64, 52);
  head.run();
}
