function preload() {}

function setup() {
  canvas = createCanvas(640, 480);
  circle(130, 130, 50);
  ellipse(110, 360, 55, 55);
  rect(300, 230, 55, 55, 20);
  rect(400, 420, 55, 55, 20, 15, 10, 5);
  rect(500, 7, 55, 55);
  triangle(30, 75, 58, 20, 86, 75);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tintColor = "";
}

function draw() {
  Image(video, 0, 0, 640, 480);
  tint(tintColor);
}

function takeSnapshot() {
  SVGAElement("studentName.png");
}
