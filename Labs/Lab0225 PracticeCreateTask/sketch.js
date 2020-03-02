//  Your Name
// 	925  Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle;
var score = 0;
var health = 10
var gameState = 1;
var gameMode;
var b;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  makeButtons;
} //end of setup

function draw() {
  if(gameState === 1){
    textSize(75);
    text('Paddle Ball!', 235, 300);
    startGame();
  }
  if(gameState === 2){
    playGame();
  }
  if(gameState === 3){
    endGame();
  }
  background(255,255,255, 60);
  fill(2, 2, 2)
  if(lives === 0) gameState = 3;
} //end of draw

function makeButtons(){
  btnEasy = new Button(200, 600, 60, 60, "Easy", color(0, 250, 0));
  btnMed = new Button(400, 600, 60, 60, "Medium", color(250, 250, 0));
  btnHard = new Button(600,600, 60, 60, "Hard", color(250, 0, 0));
}

function startGame(){
  btnEasy.run();
  btnMed.run();
  btnHard.run();
  if(gameMode === 1){
    loadObjects(2);
  }else if(gameMode === 2){
    loadObjects(3);
  }else if(gameMode === 3){
    loadObjects(5); //hard mode: balls go faster, start with negative points
  };
} //end of startGame

function playGame(){
  runObjects();
  fill(0,0,0);
  textSize(25);
  text('Score:' + score, 50, 30);
  fill(0,0,0);
  textSize(25);
  text('Health:' + health, 650, 30);
}//end of playGame

function endGame(){
  background(65,55,237);
} //end of endGame

function loadObjects(b){
  for(var i =0; i < b; i++){
    balls[i] = new Ball(random(800), random(300), random(0, 5), random(0,5));
  }
  paddle = new Paddle(250, 700, 200, 25);
}

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++) balls[i].run();
}
