function setup() {
  createCanvas(800,400);
 fixed = createSprite(400, 200, 50, 50);
 moving = createSprite(100,200,70,30);
 fixed.shapeColor=("red")
 moving.shapeColor="yellow"
}

function draw() {
  background(0); 
  
  moving.x=mouseX
  moving.y=mouseY

  if(fixed.x-moving.x<(fixed.width/2+moving.width/2) && moving.x-fixed.x<(fixed.width/2+moving.width/2)
  && fixed.y-moving.y<(fixed.height/2+moving.height/2) && moving.y-fixed.y<(fixed.height/2+moving.height/2)){
    fixed.shapeColor=("green")
    moving.shapeColor="blue"
  }
  else{
    fixed.shapeColor=("red")
  moving.shapeColor="yellow"
  }

  drawSprites();
}