let x = mycanvas.width-30;
let y = mycanvas.height/2;
let dx = -2;
let dy = -2;
let ballRadius = 7;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#33EC00";
    ctx.fill();
    ctx.closePath();
}