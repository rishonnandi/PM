
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ground1 = new Ground(400, 390, 800, 10)

	engine = Engine.create();
	world = engine.world;


}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  
 
}



