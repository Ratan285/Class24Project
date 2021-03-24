
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,ground,stone1,rubber1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer1 = new Hammer(20, 20, 200, 50)
	ground = new Ground(400,650,800,25)
	stone1 = new Stone(200,200,150,150)
	rubber1 = new Rubber(300,300,150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  
  hammer1.display();
  ground.display();
  stone1.display();
  rubber1.display();
  
  drawSprites();
 
}



