var cat,cat_walking,cat_sitting,cat_collided,catImage;
var mouse,mouse_standing,mouse_teasing,mouse_collided,mouseImage;
var garden, gardenImage;


function preload(){
  cat_sitting = loadImage("cat1.png");
  cat_walking = loadAnimation("cat2.png,cat3.png");
  cat_collided = loadImage("cat4.png");
  
  gardenImage = loadImage("garden.png");

  mouse_teasing = loadAnimation("mouse1.png,mouse3.png");
  mouse_standing = loadImage("mouse2.png");
  mouse_collided = loadImage("mouse4.png");
  }

function setup() {
  createCanvas(1000,800);

  cat = createSprite(50,160,20,50);
  cat.addImage("sitting",cat_sitting);
  cat.addAnimation("walking", cat_walking);
  cat.addImage("collided", cat_collided);
  
  cat.scale = 0.5;
  
  mouse = createSprite(50,160,20,50);
  mouse.addImage("standing",mouse_standing);
  mouse.addAnimation("teasing", mouse_teasing);
  mouse.addImage("collided", mouse_collided);
  
  mouse.scale = 0.2;

  garden = createSprite(1000,800,50,50);
  garden.addImage(" garden", gardenImage);
  garden.x =  garden.width /2;
  
  cat.setCollider("rectangle",0,0,cat.width,cat.height);
  cat.debug = true
  
  mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
  mouse.debug = true
  
}

function draw() {
  
  background(225);

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
        mouse.addAnimation("mouse_teasing",mouse1.png,);
        mouse.changeAnimation("mouse_teasing");
        mouse.frameDelay = 25;
    }
 
    if(keyCode === LEFT_ARROW){
     mouse.addAnimation("mouse_teasing",mouse3.png,);
     mouse.changeAnimation("mouse_teasing");
     mouse.frameDelay = 25;
 }
 
   }