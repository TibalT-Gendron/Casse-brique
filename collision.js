// Initialisation et definition de la fonction collisionDetection() permettant la collission balle -> briques //
function collisionDetection() {

    // Verification de la collission pour chaque briques du tableau bricks[] //
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            let b = bricks[c][r];
            if(b.id == 0) {
                if(x > b.x-ballRadius && x < b.x+brickWidth+ballRadius && y > b.y-ballRadius && y < b.y+brickHeight+ballRadius) {
                    if(x > b.x-ballRadius && x < b.x || x < b.x+brickWidth+ballRadius && x < b.x+brickWidth){
                        dy = -dy;
                    }else if(y > b.y-ballRadius && y < b.y || y < b.y+brickWidth+ballRadius && y < b.y+brickWidth){
                        dx = -dx;
                    }
                    let www = Math.floor(Math.random() *100)
                    if(www < nivdif){
                        b.id = 2;
                    }else if(www < nivdif*2 && www > nivdif){
                        b.id = 3;
                    }else{
                        b.id = 1;
                    }
                    score++;
                    b.status = 0;
                }

                // Verification de la collission paddle -> briques //
                if(b.x+brickWidth < paddleX && b.x > paddleX && ((b.y < paddleY-paddleWidth && b.y > paddleY) || (b.y+brickHeight < paddleY-paddleWidth && b.y+brickHeight > paddleY))){
                    if(b.id == 1){
                        console.log("OK");
                        //On ne fait rien ;)
                    }else if(b.id == 2){
                        paddleWidth += 15;
                        zzz++;
                    }else if(b.id == 3){
                        paddleWidth -= 15;
                        zzz--;
                    }

                }
            }
        }
    }
}
