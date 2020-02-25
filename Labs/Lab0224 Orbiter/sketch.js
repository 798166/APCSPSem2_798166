//  Will Kreidler
// 	30 January 2020
//  This is a comment
//  The setup function function is called once when your program begins
var boids = [];  //global variable to make boids
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255);
  fill(200, 30, 150);
  loadBoids(80); //eighty boids appear on screen


}

//  The draw function is called @ 30 fps
function draw(){  //run runBoids function
runBoids();
}

function loadBoids(n){  //make array of boids appear
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(400,400, random(-2,2), random(-2,2)); //appear at middle of the screen, velocity and acceleration in between -2 and 2
}
}
function runBoids(){
  for(var i = 0; i < boids.length; i++){ //run boid
    boids[i].run();
  }
}
