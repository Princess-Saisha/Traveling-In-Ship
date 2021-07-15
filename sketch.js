var seaImg,sea,ship,shipImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation ("ship-1.png","ship-2.png");
shipImg2 = loadAnimation ("ship-3.png","ship-3.png","ship-4.png","ship-3.png");
}

function setup(){
  createCanvas(400,400);
   background("blue");
  

 sea= createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -3;
  sea.scale = 0.3;
  
  ship = createSprite(100,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale = 0.25;
}

function draw() {
  background(0);
  sea.velocityX = -3;
  
  if(sea.x <0){
    sea.x = sea.width/7;
  }
  
  if(keyDown("space")){
    ship.addAnimation ("movingShip",shipImg2);
  }
  
 drawSprites();
}
 
