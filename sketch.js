var plinkos=[];
var division=[];
var particles=[];





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Division(240,700,480,12);


	Engine.run(engine);
  
}


function draw() {



	
  rectMode(CENTER);
  background(0);
  
  ground.display();


   
 

  for(var k = 0; k<division.length; k++){

    division[k].display();
    
      }

      for(var g = 0; g<plinkos.length; g++){

        plinkos[g].display();
        
          }
    
          for(var a = 0; a<particles.length; a++){

            particles[a].display();
            
              }
        
        
        
         
        


  drawSprites();


  




 
    


  for(var i = 0; i <=width;  i = i+80){

    division.push(new Division(i,560,10,divisionHeight));
    
        }
  
        for(var f = 40; f<=width; f = f+ 50){
 
          plinkos.push(new Plinko(f,75,10));
        }

       


        for(var j = 15; j<=width-10; j=j+50){

          plinkos.push(new Plinko(j,175,10));



        }


        for(var v = 10; v<=width-20; v=v+50){

          plinkos.push(new Plinko(v,275,10));



        }

        for(var b = 20; b<=width-30; b=b+60){

          plinkos.push(new Plinko(b,375,10));



        }


       
        if(frameCount%60 === 0){

          particles.push(new Particles(random(width/2-10,width/2+10),50,10));
          //particles.Velocity.y = 10;
          
          
          }



}



