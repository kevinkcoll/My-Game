var swimmer,fish
var swimmer_image, bluefish_image,creamfish_image,greenfish_image;
var water 
var lifebar = 145;
function preload(){

  swimmer_image= loadImage("snorkellingman.png");
  bluefish_image= loadImage("blue fish.png");
  creamfish_image= loadImage("creamfish.png");
  greenfish_image= loadImage("green fish.png");
}
function setup() {
  createCanvas(600,400);
  water = createSprite(300,300,width,200)
  water.shapeColor= "skyblue"
  swimmer= createSprite(50,100,50,50);
  swimmer.addImage(swimmer_image);
  swimmer.scale= 0.8;


}


function draw() 
{
  background("tomato");
  if(keyDown("down")){
    swimmer.y=swimmer.y+2
  }
  if(keyDown("up")){
    swimmer.y=swimmer.y-2
  }
  if(keyDown("right")){
    swimmer.x=swimmer.x+2
  }
  if(keyDown("left")){
    swimmer.x=swimmer.x-2
  }
  console.log(swimmer.y)
  spawnFishes()
  drawSprites()
  text("Oxygen", 300,100)
  fill("white")
  rect(250,50,145,20)
  fill("red")
  rect(250,50,lifebar,20)
  if(frameCount%10===0 && lifebar>0 && swimmer.y>200){
    lifebar-=5
  }

  if(swimmer.y<=200){
    lifebar=145
  }

  if(swimmer.x>=600){
    swimmer.x=600
  }
  if(swimmer.x<=0){
    swimmer.x=0
  }
}

function spawnFishes(){
  if(frameCount%60===0){
    var fish = createSprite(width, Math.round(random(250,350)))
    var rand = Math.round(random(0,2))
    if(rand===0){
      fish.addImage(bluefish_image)
    }else if(rand===1){
      fish.addImage(greenfish_image)

    }else if(rand===2){
      fish.addImage(creamfish_image)

    }
    fish.velocityX = -2
  }
}


