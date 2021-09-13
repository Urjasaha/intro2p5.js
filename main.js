function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);

    -fill(155, 180, 90); 
    stroke(255, 180, 0);
    circle(50, 50, 75); 
    
    circle(590, 50, 75); 
    circle(590, 430, 75); 
    circle(50, 430, 75);

    -fill(3,187,90);
    stroke(0,128,0);
    rect(90,40,460,20);

    rect(90,420,460,20);

}