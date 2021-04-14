const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,log1,log2,log3,log4,ground,pig1,pig2,bird;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,750,50,50);
    box2 = new Box(600,750,50,50);
    box3 = new Box(400,675,50,50);
    box4 = new Box(600,675,50,50);
    pig1 = new Pig(500,750);
    pig2 = new Pig(500,675);
    log1 = new Log(500,700,255,PI/2);
    log2 = new Log(500,625,255,PI/2);
    box5 = new Box(500,600,50,50);
    log3 = new Log(475,600,125,PI/3);
    log4 = new Log(540,600,125,-PI/3);
    bird = new Bird(200,200);
    ground = new Ground(400,780,800,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log3.display();
    box5.display();
    log2.display();
    log4.display();
    bird.display();
    ground.display();
}