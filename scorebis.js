let mycanvas = document.getElementById("myCanvas");
let ctx = mycanvas.getContext("2d");

let score = 0;
let lives = 3;

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, mycanvas.width-65, 20);
}
