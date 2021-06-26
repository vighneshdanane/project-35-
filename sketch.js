//Create variables here
var database
var food;
var dog
var dogimg1 , dogimg2
var foodS , foodStock;


function preload()
{
	dogimg1 = loadImage("images/dogImg.png")
  dogimg2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database= firebase.database()
  dog = createSprite(250 , 300 , 150 , 150 )
  dog.addImage(dogimg1)
  dog.scale = 0.15

  foodStock = database.ref("food")
  foodStock.on("value",readStock)
  
}


function draw() {  
  //add styles here
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogimg2);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    food:x
  })
}





