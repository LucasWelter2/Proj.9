var ambient = createSprite(200,200);
ambient.setAnimation("Pirate Ship");

var crocodile = createSprite(10,200,10,10);
crocodile.setAnimation("crocodile_1");
crocodile.scale=0.2;

var enemy1 = createSprite(110,68,10,10);
enemy1.setAnimation("ouriço do mar");
enemy1.scale=0.1;

var enemy2 = createSprite(220,68,10,10);
enemy2.setAnimation("ouriço do mar");
enemy2.scale=0.1;

var enemy3 = createSprite(320,68,10,10);
enemy3.setAnimation("ouriço do mar");
enemy3.scale=0.1;

enemy1.velocityY=-10;
enemy2.velocityY=10;
enemy3.velocityY=-10;

var fish = createSprite(380,200);
fish.setAnimation("steak_1");
fish.scale=0.1;



var death = 0;

var goal= 0;


function draw() {
createEdgeSprites();

enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if(keyDown(UP_ARROW)){
  crocodile.y=crocodile.y-3;
}

if(keyDown(DOWN_ARROW)){
  crocodile.y=crocodile.y+3;
}

if(keyDown(LEFT_ARROW)){
  crocodile.x=crocodile.x-5;
}

if(keyDown(RIGHT_ARROW)){
  crocodile.x=crocodile.x+5;
}

if(crocodile.isTouching(enemy1)|| crocodile.isTouching(enemy2)|| crocodile.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  crocodile.x=10;
  crocodile.y=200;
  death = death+1;
}

textSize(20);
  fill("blue");
  text("Objetivos:"+goal,320,350);
  

textSize(20);
  fill("blue");
  text("mortes:"+death,20,350);


if(crocodile.isTouching(fish)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  crocodile.x=200;
  crocodile.y=345;
  goal=goal+1;
}



drawSprites()
}