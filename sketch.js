var Grassland, ground
var chance = 3
function preload(){

}


function setup(){
  createCanvas(windowWidth, windowHeight)
   Grassland = createSprite(100,height-100,100,100);
   ground = createSprite(width/2,height-35,width+500,70);
   
   //bad2 = createSprite(850,height-120,100,100)
   //bad3 = createSprite(1280,height-120,100,100)
   Grassland.shapeColor = "lime"
   ground.shapeColor = "white"
   enemygroup = new Group()
   //bad2.shapeColor = "red"
   //bad3.shapeColor = "red"
life1 = createSprite(50, 50, 100, 25);
life2 = createSprite(150, 50, 100, 25);
life3 = createSprite(250, 50, 100, 25);
life1.shapeColor = "black";
life2.shapeColor = "black";
life3.shapeColor = "black";
life11 = createSprite(50, 50, 95, 25);
life21 = createSprite(150, 50, 95, 25);
life31 = createSprite(250, 50, 95, 25);
life11.shapeColor = "blue";
life21.shapeColor = "blue";
life31.shapeColor = "blue";
   
}
function draw() {
  background("Green")
  ground.velocityX = -4
  console.log(ground.x)
  if(ground.x<0){
    ground.x = ground.width/2
  }
  
  //if (keyWentDown("right")) {
  // Grassland.velocityX=2 
  //}
  if (keyWentDown("up")&&Grassland.y>height/2) {
   Grassland.velocityY=-4 
  }
  Grassland.velocityY=Grassland.velocityY+0.1

 if (Grassland.isTouching(enemygroup)){
  if(keyDown("space")){
    enemygroup.destroyEach()
    
  }
  else{
    chance = chance-1
  }
 }
 if(chance==2){
   life31.visible = false
 }
 if(chance==1){
  life21.visible = false
}
if(chance==0){
  life11.visible = false
}
 
/*if (Grassland.isTouching(bad2)){
  if(keyDown("space")){
    bad2.destroy()

  }
 }

 if (Grassland.isTouching(bad3)){
  if(keyDown("space")){
    bad3.destroy()

  }
 }*/
  Grassland.collide(ground);
  enemy();
  drawSprites()
  
}

function enemy(){
  if(frameCount%550==0){
    bad1 = createSprite(width,height-120,100,100);
    bad1.shapeColor = "red"
    bad1.velocityX = -5
    enemygroup.add(bad1)
  }
}