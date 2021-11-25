var box;
function setup() {
  createCanvas(600,600);
  box=createSprite(300,300,100,100);
  box.shapeColor="cyan";
}

function draw() 
{
  background(30);
drawSprites();
if(keyDown("RIGHT")){
box.x=box.x+3;
}
if(keyDown("LEFT")){
box.x=box.x-3;
}
if(keyDown("UP")){
box.y=box.y-3;
}
if(keyDown("DOWN")){
  box.y=box.y+3;
}
}



