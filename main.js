function setup(){
    canvas = createCanvas(500,300)
    canvas.center();
    video = createCapture(VIDEO);
   video.hide();
}

status1 = "";


function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input = document.getElementById("input").value;
    }

    function modelLoaded(){
        console.log("model loaded");
        status1 = true;
    }

function draw(){
   image(video,0,0,500,300)
}