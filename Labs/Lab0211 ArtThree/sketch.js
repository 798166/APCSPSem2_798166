//  Will Kreidler
// 	30 January 2020
//  This is a comment
//  The setup function function is called once when your program begins
var Boids=[];

function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 255, 255);
  fill(200, 30, 150);
  //loads boids
  loadBoids(50);
}

function draw() {
  background(255,255,255);
  //runs Boids
  runBoids();
}

function loadBoids(n){
  for(var i=0; i<n; i++){
    Boids[i]= new Boid(random(width), random(height),random(-8,8), random(-8,8));
  }
}

function runBoids(){
  for(var i=0; i<Boids.length; i++){
    Boids[i].run();
  }
}
