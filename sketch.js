const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var sling1,sling2,sling3,sling4,sling5;
 
function setup() {
	canvas = createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;
  

  bobObj1 = new Pendulum(1500,1000,60);
  bobObj2 = new Pendulum(1560,1000,60);
  bobObj3 = new Pendulum(1620,1000,60);
  bobObj4 = new Pendulum(1680,1000,60);
  bobObj5 = new Pendulum(1740,1000,60);

  sling1 = new Sling(bobObj1.body,{x:1500,y:200});
  sling2 = new Sling(bobObj2.body,{x:1560,y:200});
  sling3 = new Sling(bobObj3.body,{x:1620,y:200});
  sling4 = new Sling(bobObj4.body,{x:1680,y:200});
  sling5 = new Sling(bobObj5.body,{x:1740,y:200});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");

bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display();

sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();

  drawSprites();
}

function mouseDragged(){
  Matter.body.setPosition(bobObj1.body, { x: mouseX, y: mouseY});
}

