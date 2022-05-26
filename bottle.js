bottle_img = "";
status = "";
function preload() {
    bottle_img = loadImage("bottle-i.webp");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();

    document.getElementById("status").innerHTML = "Status : Objects are getting detected";
    modelload = ml5.objectDetector("cocossd", modelloaded);
}

function back() {
    window.location = "index.html";
}
function modelloaded() {
    console.log("model is loaded");
    status = true;
    modelload.detect(bottle_img, gotresult);
}
function gotresult(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
function draw() {
    image(bottle_img,0,0,300,300);
}