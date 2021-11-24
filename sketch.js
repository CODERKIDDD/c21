
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	ball = Matter.Bodies.circle(100, 100, 20, ball_options);
	var options = {
		isStatic : true
	  }
	  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
	  World.add(world, ground)

	  groundObj = new ground(width/2, 670, width, 20)
	  leftSide = new ground(1100, 600, 20, 120);

	  groundObj.display()

	Engine.run(engine);
  
}


function draw() {
background(255);
fill("blue")
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyFroce(body, position, force)
	}
}





