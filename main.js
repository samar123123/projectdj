song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function setup(){
    canvas = createCanvas(600,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Model is loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX =  results[0].pose.rightWrist.x;
        rightWristY =  results[0].pose.rightWrist.y;
    }
}

function draw(){
    image(video,0,0,600,400);
}

function preload(){
    song1 =loadSound("music.mp3");
    song2 = loadSound("heat.mp3.mp3");
}

