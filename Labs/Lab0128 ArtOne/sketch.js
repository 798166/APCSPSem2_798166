//  Will Kreidler
// 	30 January 2020
//  This is a comment
//  The setup function function is called once when your program begins
var boids = []//array for boids
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(221, 245, 66);
  fill(221, 245, 66);
  loadBoids(100);


}

//  The draw function is called @ 30 fps
function draw() {
  runBoids();
}
function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(random(width), random(height), random(-1, 1), random(-1, 1), i);
  }
}//loads boids in array
function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}//runs boids
