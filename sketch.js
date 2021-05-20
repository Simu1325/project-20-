
var cat,cat_walking,cat_sitting,cat_collided,catImage;
var mouse,mouse_standing,mouse_teasing,mouse_collided,mouseImage;
var garden, gardenImage;


function preload(){
  cat_sitting = loadImage("images/cat1.png");
  cat_walking = loadAnimation("images/cat2.png","images/cat3.png");
  cat_collided = loadImage("images/cat4.png");
  
  gardenImage = loadImage("images/garden.png");

  mouse_teasing = loadAnimation("images/mouse1.png","images/mouse3.png");
  mouse_standing = loadImage("images/mouse2.png");
  mouse_collided = loadImage("images/mouse4.png");
  }

function setup() {
  createCanvas(1000,800);

  cat = createSprite(800,600,20,50);
  cat.addImage("sitting",cat_sitting);
  cat.addAnimation("walking", cat_walking);
  cat.addImage("collided", cat_collided);
  
  cat.scale = 0.2;
  
  mouse = createSprite(200,600,20,50);
  mouse.addImage("standing",mouse_standing);
  mouse.addAnimation("teasing", mouse_teasing);
  mouse.addImage("collided", mouse_collided);
  
  mouse.scale = 0.15;
  
  cat.setCollider("rectangle",0,0,cat.width,cat.height);
  cat.debug = true
  
  mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
  mouse.debug = true
  
}

function draw() {
  
  background(gardenImage);

    if(cat.x - mouse.x< (cat.width - mouse.width)/2){
    cat.changeAnimation("collided",cat_collided);
    mouse.changeAnimation("collided",mouse_collided);
  
    if (garden.x < 0){
        garden.x = ground.width/2;
      }
}
    
  drawSprites();
}
  function keyPressed(){

    if(keyCode === RIGHT_ARROW){
      mouse.frameDelay = 25;
      mouse.x = mouse.x+10
      mouse.addAnimation("mouse_teasing",mouseImage);
      mouse.changeAnimation("mouse_teasing");
       }

   if(keyCode === LEFT_ARROW){
    cat.frameDelay = 25;
    cat.x = cat.x-10
    }
}