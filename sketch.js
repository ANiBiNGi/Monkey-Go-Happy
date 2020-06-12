var monkey;
var ground;
var banana;
var jungle;
var bananaGroup;
var score = 0;

function preload(){
   monkey_walking = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImg = loadImage("Banana.png");
  groundImg = loadImage("ground.jpg");
  jungleImg = loadImage("jungle.jpg");
}


function setup() {
  createCanvas(600,300);
  
   jungle = createSprite(0,0,600,300);
  jungle.addImage('jungle', jungleImg);
   jungle.scale=1.5;
  jungle.x=jungle.width/2;
  jungle.velocityX=-4;
  
  monkey = createSprite(100,240);
  monkey.addAnimation('monkey', monkey_walking);
  monkey.scale = 0.1;
  
  ground = createSprite(300,280,600,20);
 // ground.addImage('ground',groundImg);
  
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
   FoodGroup = new Group();
   //obstaclesGroup = new Group();
  
  score = 0;
  }


function draw(){
 background(255); 
edges = createEdgeSprites();
   
  if (ground.x < 0){ 
    ground.x = ground.width/2;
  }
  if(jungle.x<0){
    jungle.x=jungle.width/2;
  }
  if (FoodGroup.isTouching(monkey)) {
    FoodGroup.destroyEach();
      score = score+1
  }
  text('score:'+ Math.round(score/2),500,50);
 
   switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14; 
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);

    spawnFood();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}

function spawnFood () {
   if(frameCount % 200 === 0) {
   banana = createSprite(600,random(50,80));
  banana.addImage('banana', bananaImg);
  banana.scale=0.06
  banana.velocityX = random(-6,-3);
     banana.lifetime=200
  
     FoodGroup.add(banana);
     
   }
}