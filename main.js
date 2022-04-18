function setup(){
    canvas=createCanvas(640,480);
    canvas.position(410,250);
    video=createCapture(VIDEO);
    video.hide();

    function draw(){
        image(video,0,0,640,480);
    }
    
   
    
    }



function take_snapshot(){
rect(0,0,640,480);
describe('purple rect with black outline in mid-right of canvas');
}

    