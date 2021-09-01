
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var leftSIde,rightSide;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = Matter.Bodies.circle(400,200,50,ball_options);
	 World.add(world,ball);


	//Engine.run(engine);
     
	ground1 = new ground(800,670,1600,20);
	leftSIde = new ground(1100,600,20,120);
	rightSide = new ground(1350,600,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  leftSIde.display();
  rightSide.display();
  
  drawSprites();
	
  ellipse(ball.position.x,ball.position.y,50);
 
  Engine.update(engine);
}

function keyPressed()
{
if(keyCode === UP_ARROW)
{
Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
}
}



