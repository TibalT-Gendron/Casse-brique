let z = 2;

drawBricks();

function draw() {
    if(spacePressed == true){
        if(started == 'on'){
            started = 'off';
        }else if(started == 'off'){
            started = 'on';
        }
    }
    if(started == 'on'){
        ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
        collisionDetection();
        drawAvbricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();

        for(let c=0; c<1; c++) {
            for(let r=0; r<1; r++) {
                if(bricksfant[c][r].x > brickPadding && bricksfant[c][r].x-2 < brickPadding && bricksfant[c][r].status == 1){
                    drawBricks();
                    break
                }
            }
        }

        CollBall();

        if(downPressed && paddleY < mycanvas.height-paddleWidth) {
            paddleY += z;
        }
        else if(upPressed && paddleY > 0) {
            paddleY -= z;
        }

        x += dx;
        y += dy;
    }

}
setInterval(draw, 10);