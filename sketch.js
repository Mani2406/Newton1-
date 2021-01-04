
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(400, 100, 800, 50);
	ball1 = new Ball(400,600,70);
	ball2 = new Ball(330,600,70);
	ball3 = new Ball(470,600,70);
	ball4 = new Ball(260,600,70);
	ball5 = new Ball(540,600,70);
	rope1 = new Rope(ball1.body, roof1.body,2, 0)
	rope2 = new Rope(ball2.body, roof1.body,2, 0 )
	rope3 = new Rope(ball3.body, roof1.body,2, 0)
	rope4 = new Rope(ball4.body, roof1.body,2, 0)
	rope5 = new Rope(ball5.body, roof1.body,2, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  

  drawSprites();
 
}

function mouseDragged() {

	Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY});
   }


