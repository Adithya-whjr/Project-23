var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2,rect3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var options = {
		isStatic: false
	  }
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    rect1 = createSprite(400,670,200,20)
	rect2 = createSprite(300,620,20,100)    
	rect3 = createSprite(500,620,20,100)
	rect1.shapeColor = ("red");
	rect2.shapeColor = ("red");
    rect3.shapeColor = ("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground use for supply mission 2 also (similar)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 rect1 = Bodies.rectangle(400, 670, 200 , 20 , {isStatic:true} );
	 World.add(world, rect1);
	 
	 rect2 = Bodies.rectangle(300,620,20,100 , {isStatic:true} );
	 World.add(world, rect2);

	 rect3 = Bodies.rectangle(500,620,20,100 , {isStatic:true} );
	 World.add(world, rect2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
   Body.setStatic(packageBody,false)
  }
}



