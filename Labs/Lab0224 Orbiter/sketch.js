//  Will Kreidler
// 	30 January 2020
//  This is a comment
//  The setup function function is called once when your program begins
var particles = [];
function setup() {//sets up the canvas
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadParticles(6);//load 6 particles onto the screen
}

//  The draw function is called @ 30 fps
function draw() {
  background(255, 255, 255, 2);//background color
  for(var i = 0; i < particles.length; i++){//draws the particles
    particles[i].run();
  }
}

function loadParticles(x){//creates the particles
  for(var i = 0; i < x; i++){//creates x number of new particles
    particles[i] = new Particle(random(10, 700), random(10, 700))
  }
}
