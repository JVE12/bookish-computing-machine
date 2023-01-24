noseX=0;
noseY=0;
function preload() {
    MS = loadImage('https://i.postimg.cc/W47fzGPt/My-project-2.png')
    LS = loadImage('https://i.postimg.cc/Y0cNqQFP/OIP-2.jpg')
    
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log("PoseNet Is Initialized")
}

function gotPoses(results) {

    if(results.length > 0)
    {
        noseX=results[0].pose.nose.x-100;
        noseY=results[0].pose.nose.y-65;
        //console.log(results);
        //console.log("nose x = " +noseX);
       // console.log("nose y = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(MS,noseX,noseY,150,150);

}


function take_snapshot() {
    save('THISISAPNGNOTAJPEG.png');
}