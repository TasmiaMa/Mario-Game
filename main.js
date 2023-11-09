
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	 canvas=createCanvas(1240,336);
	 canvas.parent("canvas")
	
	 video=createCapture(VIDEO)
	 video.size(800,400)
	 video.parent("game_console")
	 poseNet=ml5.poseNet(video,modelLoaded)
	poseNet.on("pose",got_poses)
}


function modelLoaded(){
	console.log("Model is loaded")
}


 function got_poses(results){
if (results.length>0) {
	nosex=results[0].pose.nose.x
	nosey=results[0].pose.nose.y
}
 }


function draw() {
	game()
}






