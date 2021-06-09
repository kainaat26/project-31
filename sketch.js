const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particle = []
var plinko = []
var division = []

function preload(){

}

function setup() {
  createCanvas(499,600);
    engine = Engine.create();
    world = engine.world;

  ground1 = new Ground(250,600,480,20);

  for(var k = 7;k <=width; k = k + 80){
    division.push(new Division(k, height - 30/2,10,600));
  }
  

  for(var j = 40;j <=width; j=j+50)
  {
    plinko.push(new Plinko(j,50));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {
    plinko.push(new Plinko(j,100));
  } 
  for (var j = 40; j <=width-10; j=j+50)
  {
    plinko.push(new Plinko(j,150));
  } 
  for (var j = 15; j <=width-10; j=j+50)
  {
    plinko.push(new Plinko(j,200));
  } 

//if(frameCount%60===0){
// particle.push(new Particle(random(width/2-10,width/2+10,10,10)));
//}
}

function draw() {
  background("pink");  
  Engine.update(engine);

  ground1.display();

  for (var k = 0 ;k < division.length;k++) {
    division[k].display()
  }


  for (var j = 0 ;j < plinko.length;j++) {
    plinko[j].display()
  }

  
  //for (var a = 0; a < particle.length; a++){
//
 //   particle[a].display()
 // }
}