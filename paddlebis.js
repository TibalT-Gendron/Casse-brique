let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (mycanvas.width-paddleHeight)-10;
let paddleY = mycanvas.height/2;
let upPressed = false;
let downPressed = false;
let spacePressed = false;
let started = 'off';
let zzz = 5;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 32){
        spacePressed = true;
    }else if(e.keyCode == 38) {
        upPressed = true;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 32){
        spacePressed = false;
    }else if(e.keyCode == 38) {
        upPressed = false;
    }
    else if(e.keyCode == 40) {
        downPressed = false;
    }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleHeight, paddleWidth);
    ctx.fillStyle = "#33EC00";
    ctx.fill();
    ctx.closePath();
}