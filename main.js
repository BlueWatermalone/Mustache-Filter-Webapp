NoseX = 0;
NoseY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
canvas = createCanvas(350, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(350, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        NoseX = results[0].pose.nose.x - 30;
        NoseY = results[0].pose.nose.y + 5;
        console.log("nose x = " + NoseX);
        console.log("nose y = " + NoseY);
    }
}

function draw() {
    image(video, 0, 0, 350, 300);
    image(mustache, NoseX, NoseY, 60, 30);
}

function takeSnapshot() {
    save("filterPic.png");
}