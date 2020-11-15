var player, gameState;
var maze = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  player = createSprite(120, height-100, 30, 30);
  player.shapeColor = 'salmon'

  var hLine1 = createSprite(width/2, 60, width - 200, 3)
  hLine1.shapeColor = "blue"
  maze.push(hLine1);

  var vLine1 = createSprite(100, height/2-50, 3, 400)
  vLine1.shapeColor = "blue"
  maze.push(vLine1);

  var floor1 = createSprite(width/2, height-70, width-200, 3)
  floor1.shapeColor = 'blue'
  maze.push(floor1);

  var vLine2 = createSprite(width - 100, height/2+40, 3, 400)
  vLine2.shapeColor = "blue"
  maze.push(vLine2);

  var ob1 = createSprite(200 , height/2+165, 3, 150)
  ob1.shapeColor = "red"
  maze.push(ob1);

  var ob2 = createSprite(350 , height/2+190, 3, 100)
  ob2.shapeColor = "orange"
  maze.push(ob2);


  var ob3 = createSprite(500 , height/2+115, 3, 250)
  ob3.shapeColor = "yellow"
  maze.push(ob3);


  var ob4 = createSprite(650 , height/2+65, 3, 350)
  ob4.shapeColor = "green"
  maze.push(ob4);


  var ob5 = createSprite(800 , height/2+90, 3, 300)
  ob5.shapeColor = "blue"
  maze.push(ob5);


  var ob6 = createSprite(950 , height/2+40, 3, 400)
  ob6.shapeColor = "indigo"
  maze.push(ob6);


  var ob7 = createSprite(1100 , height/2+65, 3, 350)
  ob7.shapeColor = "violet"
  maze.push(ob7);

}

function draw() {
  background(30)  

  if(keyWentDown(UP_ARROW)){
    player.velocityY = -5
  }



 if(keyWentDown(RIGHT_ARROW)){
  player.velocityX = 2
 }

 if(keyWentDown(LEFT_ARROW)){
   player.velocityX = 2
}

  drawSprites();
}