const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, iron, rubber, ground;

function preload() {

}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	// Create the Bodies Here
	hammer = new Hammer(20, 100);
	iron = new Iron(100, 200);
	stone = new Stone(350, 200, 80, 80);
	rubber = new Rubber(450, 200);
	ground =new Ground(400, 500, 800, 20);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background("lightblue");

	drawSprites();
	hammer.display();
	iron.display();
	rubber.display();
	stone.display();
	ground.display();

}
