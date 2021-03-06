var packageSprite,side1,side2,side3;
var packageBody,ground,body1,body2,body3; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 40,40);
	
	groundSprite = createSprite(width/2,height-10,width,10);
	groundSprite.shapeColor=color(255);

	side1 = createSprite(width/2.65,height-35,20,250);
	side1.shapeColor = ("red");

	side2 = createSprite(width/1.75,height-35,20,250);
	side2.shapeColor = ("red");

	side3 = createSprite(width/2.12,590,150,20);
	side3.shapeColor = ("red");
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.00, isStatic:true});
	World.add(world, packageBody);
	
	body1 = Bodies.rectangle(width/2.65,height-55,20,100, {isStatic:true})
	World.add(world,body1);
	
	body2 = Bodies.rectangle(width/1.75,height-55,20,100, {isStatic:true})
	World.add(world,body2);

	body3 = Bodies.rectangle(width/2.12,590,150,20,{isStatic: true});
	World.add(world,body3);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


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
    Matter.Body.setStatic(packageBody,false);
  }
}



