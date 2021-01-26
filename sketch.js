
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeObj , groundObj , stoneObj,boy,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,launcher;
var mangoRadius = 20;
function preload()
{
	boy = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	treeObj = new Tree(1100,562.8,400,700);
	groundObj = new Ground(width/2,690,width,20);
	stoneObj = new Stone(240,535,20);
	mango1 = new Mango(1100,320,mangoRadius);
    mango2 = new Mango(1300,350,mangoRadius);
	mango3 = new Mango(1200,200,mangoRadius);
	mango4 = new Mango(1150,250,mangoRadius);
	mango5 = new Mango(1000,180,mangoRadius);
	mango6 = new Mango(1250,300,mangoRadius);
	mango7 = new Mango(900,280,mangoRadius);
	mango8 = new Mango(950,320,mangoRadius);
	mango9 = new Mango(1030,280,mangoRadius);
	mango10 = new Mango(1030,350,mangoRadius);

	launcher = new Slingshot(stoneObj.body,{x:245,y:530});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,455,250,300);
  treeObj.display();
  groundObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  launcher.display();

  detectCollison(stoneObj,mango1);
  detectCollison(stoneObj,mango2);
  detectCollison(stoneObj,mango3);
  detectCollison(stoneObj,mango4);
  detectCollison(stoneObj,mango5);
  detectCollison(stoneObj,mango6);
  detectCollison(stoneObj,mango7);
  detectCollison(stoneObj,mango8);
  detectCollison(stoneObj,mango9);
  detectCollison(stoneObj,mango10);
  drawSprites();
 
}

function mouseReleased(){
	launcher.fly();
}


function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x: mouseX, y: mouseY})
}


function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:230,y:535});
		launcher.attach(stoneObj.body);
	}
}

function detectCollison(stone,mango){
	
	var mangoPos = mango.body.position;
	var stonePos = stone.body.position;

	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
	//console.log(distance)
	if(distance<=(mango.r+stone.r)){
		console.log("Hello")
		console.log("change" + distance);
		Matter.Body.setStatic(mango.body,false);
	}
}



