//objectDetector="";
img="";
//objects=[];
status1="";

function preload(){
img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: detecting ojects";
}

function modelLoaded() { 
console.log("Model Loaded!")
status1 = true; 
objectDetector.detect(img, gotResult); 
} 

function gotResult(error, results) { 
if (error) { 
console.log(error);
} 
console.log(results);
objects = results; 
}

function draw(){
    image(img,0,0,640,420);
    /*if(status1 !=""){
        for(var i=0; i < objects.length;i++){
            document.getElementById("status").innerHTML="status: detecting ojects";*/
        fill("#FF0000");
        text("dog",45,75);
        noFill();
        storke("#FF0000");
        rect(30,60,450,350);

        fill("#FF0000");
        text("cat",320,120);
        noFill();
        storke("#FF0000");
        rect(300,90,270,320);
        }

    //}
//}