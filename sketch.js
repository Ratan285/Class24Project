
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,ground,stone1,rubber1;
var sand1,sand2,sand3,sand4,sand5,sand6,iron1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer1 = new Hammer(20, 20, 200, 50)
	ground = new Ground(400,650,800,25)
	stone1 = new Stone(500,500,150,150)
	rubber1 = new Rubber(600,600,150)
	sand1 = new Sand(140,600,20);
	sand2 = new Sand(90,600,20);
	sand3 = new Sand(60,600,20);
	sand4 = new Sand(80,600,20);
	sand5 = new Sand(100,600,20);
	sand6 = new Sand(120,600,20);
	iron1 = new Iron(500,500,60,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  
  hammer1.display();
  ground.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron1.display();
  
  drawSprites();
 
}



