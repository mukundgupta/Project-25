
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var rect1,rect2,rect3;

function preload()
{
	dustimage = loadImage("dustbinimage.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
 
	ground = new Ground(400,height,1000,21)
rect1 = new Dustbin(600,630,20,170)
rect2 = new Dustbin(740,630,20,170)
rect3 = new Dustbin(675,690,173,20)
//rect3.setImage("this.Image")
	paper = new Paper(150,500,80);
	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  Engine.update(engine);
  paper.display(); 
  rect1.display();
  rect2.display();
  rect3.display();
  image(dustimage,590,530,160,160)
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 80,y: -137})
	}
}

