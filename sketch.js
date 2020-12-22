var bullet, wall;
var speed, weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);


  bullet = createSprite(20, 200, 50, 10);
  wall = createSprite(1350, 200, thickness, 200);

  speed = random(223, 321);
  weight = random(30, 52);

  thickness = random(22, 83)

  bullet.velocityX =  speed;
  wall.shapeColor = color(80, 80, 80);
  bullet.shapeColor = "white";

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

}

function draw() {
  background("black");  
  
  if(wall.x-bullet.x  < (bullet.width+wall.width)/2){
    bullet.velocityX  =  0;

    if(damage>10){
      wall.shapeColor = "green";
    }
    if(damage<=10){
      wall.shapeColor = "red";
    }
  }

  drawSprites();
  }