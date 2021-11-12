var Grassland, ground
function preload(){

}


function setup(){
  createCanvas(windowWidth, windowHeight)
   Grassland = createSprite(100,height-100,100,100);
   ground = createSprite(width/2,height-35,width,70);
   
   //bad2 = createSprite(850,height-120,100,100)
   //bad3 = createSprite(1280,height-120,100,100)
   Grassland.shapeColor = "lime"
   ground.shapeColor = "white"
   enemygroup = new Group()
   //bad2.shapeColor = "red"
   //bad3.shapeColor = "red"
   
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
    Grassland.overlap(enemygroup,function(good,bad){
      fill("black")
      rect (150,50,50,25)
    })
   
  }
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
  healthbar()
  enemy();
  drawSprites()
  
}
function healthbar(){
  push ()
  fill ("black")
  rect (50,50,50,25)
  rect (100,50,50,25)
  rect (150,50,50,25)
  fill ("blue")
  rect (50,50,50,25)
  rect (100,50,50,25)
  rect (150,50,50,25)
  pop ()
}
function enemy(){
  if(frameCount%550==0){
    bad1 = createSprite(width,height-120,100,100);
    bad1.shapeColor = "red"
    bad1.velocityX = -2.5
    enemygroup.add(bad1)
  }
}