const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var chakra, slingShot;

var score;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    score = 0;
    ground = new Ground(600,height,1200,20);
    

    pot1 = new Pot(700,320,70,70);

    box2 = new Pot(920,320,70,70);
    pig1 = new Weapon(810, 350);

    demon1 = new Demon(810,260,300, PI/2);

    box3 = new Pot(700,240,70,70);
    box4 = new Pot(920,240,70,70);
    pig3 = new Weapon(810, 220);

    log3 =  new Weapon(810,180,300, PI/2);

    box5 = new Pot(810,160,70,70);
    log4 = new Demon(760,120,150, PI/7);
    log5 = new Demon(870,120,150, -PI/7);

    chakra = new SudarshanChakra(200,10);

    log6 = new Demon(230,180,80, PI/2);
    slingshot = new SlingShot(chakra.body,{x:200, y:50});
}

function draw(){
    //background(backgroundImg);
    background("skyblue");
    //background(231,234,236)
    Engine.update(engine);
    textSize(15);
    text("SCORE: " +score,50,50);
    strokeWeight(4);
    pot1.display();
    box2.display();
    ground.display();
    pig1.display();
    demon1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    chakra.display();

    
    //log6.display();
    slingshot.display();    

   
}

function mouseDragged(){
    Matter.Body.setPosition(chakra.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    
}