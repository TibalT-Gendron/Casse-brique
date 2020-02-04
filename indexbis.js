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

        // Appels des fonctions //
        collisionDetection();
        drawAvbricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();

        // Regard sur l'avancement des bricks pour faire apparaître les nouvelles //
        for(let c=0; c<1; c++) {
            for(let r=0; r<1; r++) {
                if(bricksfant[c][r].x > brickPadding && bricksfant[c][r].x-2 < brickPadding && bricksfant[c][r].status == 1){
                    drawBricks();
                    break
                }
            }
        }

        CollBall();

        // Mouvement du padding //
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

// Intervale de temps entre chaque appel de la fonction "draw" //
setInterval(draw, 10);