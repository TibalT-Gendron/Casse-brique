function CollBall() {
    if(x + dx < ballRadius) {
        dx = -dx;
    }else if(y + dy < ballRadius || y + dy > mycanvas.height-ballRadius) {
        dy = -dy;
    }else if(x + dx > mycanvas.width-ballRadius-10-paddleHeight && y > paddleY && y < paddleY + paddleWidth){
        if((y > paddleY && y < paddleY+zzz) || (y < paddleY + paddleWidth && y > paddleY + paddleWidth-zzz)){
            if(dy < 0){
                if(y > paddleY && y < paddleY+zzz){
                    dx = -1.40*dx;
                    dy = 0.75*dy;
                }else{
                    dx = -0.6*dx;
                    dy = 1.25*dy;
                }
            }else{
                if(y > paddleY && y < paddleY+zzz){
                    dx = -0.6*dx;
                    dy = 1.25*dy;
                }else{
                    dx = -1.40*dx;
                    dy = 0.75*dy;
                }
            }
        }else if((y > paddleY+zzz && y < paddleY+(zzz*2)) || (y < paddleY + paddleWidth-zzz && y > paddleY + paddleWidth-(zzz*2))){
            if(dy < 0){
                if(y > paddleY+zzz && y < paddleY+(zzz*2)){
                    dx = -1.35*dx;
                    dy = 0.78*dy;
                }else{
                    dx = -0.65*dx;
                    dy = 1.22*dy;
                }
            }else{
                if(y > paddleY+zzz && y < paddleY+(zzz*2)){
                    dx = -0.65*dx;
                    dy = 1.22*dy;
                }else{
                    dx = -1.35*dx;
                    dy = 0.78*dy;
                }
            }
        }else if((y > paddleY+(zzz*2) && y < paddleY+(zzz*3)) || (y < paddleY + paddleWidth-(zzz*2) && y > paddleY + paddleWidth-(zzz*3))){
            if(dy < 0){
                if(y > paddleY+(zzz*2) && y < paddleY+(zzz*3)){
                    dx = -1.30*dx;
                    dy = 0.80*dy;
                }else{
                    dx = -0.65*dx;
                    dy = 1.20*dy;
                }
            }else{
                if(y > paddleY+(zzz*2) && y < paddleY+(zzz*3)){
                    dx = -0.7*dx;
                    dy = 1.20*dy;
                }else{
                    dx = -1.30*dx;
                    dy = 0.80*dy;
                }
            }
        }else if((y > paddleY+(zzz*3) && y < paddleY+(zzz*4)) || (y < paddleY + paddleWidth-(zzz*3) && y > paddleY + paddleWidth-(zzz*4))){
            if(dy < 0){
                if(y > paddleY+(zzz*3) && y < paddleY+(zzz*4)){
                    dx = -1.25*dx;
                    dy = 0.84*dy;
                }else{
                    dx = -0.75*dx;
                    dy = 1.16*dy;
                }
            }else{
                if(y > paddleY+(zzz*3) && y < paddleY+(zzz*4)){
                    dx = -0.75*dx;
                    dy = 1.16*dy;
                }else{
                    dx = -1.25*dx;
                    dy = 0.84*dy;
                }
            }
        }else if((y > paddleY+(zzz*4) && y < paddleY+(zzz*5)) || (y < paddleY + paddleWidth-(zzz*4) && y > paddleY + paddleWidth-(zzz*5))){
            if(dy < 0){
                if(y > paddleY+(zzz*4) && y < paddleY+(zzz*5)){
                    dx = -1.2*dx;
                    dy = 0.89*dy;
                }else{
                    dx = -0.80*dx;
                    dy = 1.11*dy;
                }
            }else{
                if(y > paddleY+(zzz*4) && y < paddleY+(zzz*5)){
                    dx = -0.80*dx;
                    dy = 1.11*dy;
                }else{
                    dx = -1.2*dx;
                    dy = 0.89*dy;
                }
            }
        }else if((y > paddleY+(zzz*5) && y < paddleY+(zzz*6)) || (y < paddleY + paddleWidth-(zzz*5) && y > paddleY + paddleWidth-(zzz*6))){
            if(dy < 0){
                if(y > paddleY+(zzz*5) && y < paddleY+(zzz*6)){
                    dx = -1.1*dx;
                    dy = 0.95*dy;
                }else{
                    dx = -0.90*dx;
                    dy = 1.05*dy;
                }
            }else{
                if(y > paddleY+(zzz*5) && y < paddleY+(zzz*6)){
                    dx = -0.90*dx;
                    dy = 1.05*dy;
                }else{
                    dx = -1.1*dx;
                    dy = 0.95*dy;
                }
            }
        }else if(y >= paddleY+(zzz*6) && y <= paddleY + paddleWidth-(zzz*6) ){
            dx = -dx;
        }
    }else if(x > mycanvas.width-ballRadius) {
        lives--;
        if(!lives) {
            document.location.reload();
            alert("GAME OVER");
            clearInterval(interval); // Needed for Chrome to end game
        }else {
            x = mycanvas.width-30;
            y = mycanvas.height/2;
            dx = -2;
            dy = -2;
            paddleY = (mycanvas.width-paddleWidth)/2;
        }
    }
}