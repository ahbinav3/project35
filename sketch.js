var dog,database,position,food;
var foodS,foodstock;

var dogImg,dogImg1;

function preload()
{
  dogImg=loadImage("images/dogimg.png");
  dogImg1=loadImage("images/dogimg1.png");

}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150)
dog.addImage(dogImg);
dog.scale=0.2;
foodstock=database.ref('Food');
foodstock.on("value",readStock);

}


function draw() {  
background("green");
if(keyWentDown(UP_ARROW)){
  writestock(foodS);
  dog.addImage(dogImg1);

}
  drawSprites();
fill ("black") 
text("food remaning"+foodS,170,200);
text("press uparrow to feed the dog ",130,10,300,20);

}
function readStock(data){
  food=data.val();
}
function writestock(x){
if(x<=0){
  x=0
}
else{x=x-1;}

database.ref('/').update({
  Food:x

})
}


