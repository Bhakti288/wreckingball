const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var building1,building2,building3,building4,building5,building6,building7,building8,building9,building10;
var ball,rope,ground;

function setup (){
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,700,1200,20);
    
    building1 = new Building(900,600,80,80);
    building2 = new Building(1000,600,80,80);
    building3 = new Building(900,500,80,80);
    building4 = new Building(1000,500,80,80);
    building5 = new Building(900,400,80,80);
    building6 = new Building(1000,400,80,80);
    building7 = new Building(900,300,80,80);
    building8 = new Building(1000,300,80,80);
    building9= new Building(900,200,80,80);
    building10 = new Building(1000,200,80,80);





}

function draw (){
    background(180);
    Engine.update(engine);
    ground.display();
    building1.display();
    building2.display();
    building3.display();
    building4.display();
    building5.display();
    building6.display();
    building7.display();
    building8.display();
    building9.display();
    building10.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x: mouseX,y:mouseY});
  }
  