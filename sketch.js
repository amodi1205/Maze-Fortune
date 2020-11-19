var player, gameState;
var maze = [];
var playerState;
var coinsGroup;
var coinImg;
var coinCounter;
var score = 0

function preload(){

coinImg = loadImage('Coin.png');

}


function setup() {
  createCanvas(windowWidth, windowHeight);

  coinCounter = 0;

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

  var playerState = 0;

  coinsGroup = createGroup();

}

function draw() {
  background(30)  

  if(playerState === 1){

  

  if(keyWentDown(UP_ARROW)){
    player.velocityY = -5
  }
  player.velocityY += .25

  if(player.collide(maze)){
    player.x = 120;
    player.y = height - 100;
    player.setVelocity(0,0);
    playerState = 0;
    coinsGroup.destroyEach();
  }



 if(keyWentDown(RIGHT_ARROW)){
  player.velocityX = 2
 }

 if(keyWentDown(LEFT_ARROW)){
   player.velocityX = -2
}

}
  if(keyDown(UP_ARROW) || keyDown(RIGHT_ARROW) || keyDown(LEFT_ARROW)){
    playerState = 1;
  }


  if(coinsGroup.length<5){
    spawnCoins();
  }


  for(var i = 0;i<coinsGroup.length;i++){
    var c = coinsGroup.get(i);
    if(player.isTouching(c)){
      c.destroy();
      score++;
    }
  }


  textSize(30);
  fill('#006699')
  text("Score: "+score,width/2-50,40);

  drawSprites();


}

function spawnCoins(){
  if(frameCount % 30===0){
    var coin = createSprite(random(100,width-100), random(60,height-70), 20,20);
    coin.addImage(coinImg);
    coin.scale = 0.15;
    coinsGroup.add(coin);
    coinCounter++;
  }


}