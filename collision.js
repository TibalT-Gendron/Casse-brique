function collisionDetection() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            let b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x-ballRadius && x < b.x+brickWidth+ballRadius && y > b.y-ballRadius && y < b.y+brickHeight+ballRadius) {
                    if(x > b.x-ballRadius && x < b.x || x < b.x+brickWidth+ballRadius && x < b.x+brickWidth){
                        dy = -dy;
                    }else if(y > b.y-ballRadius && y < b.y || y < b.y+brickWidth+ballRadius && y < b.y+brickWidth){
                        dx = -dx;
                    }
                    let www = Math.floor(Math.random() *100)
                    if(www < nivdif){
                        b.id = 2;
                        console.log("2");
                    }else if(www < nivdif*2 && www > nivdif){
                        b.id = 3;
                        console.log("3");
                    }else{
                        b.id = 1;
                        console.log("1");
                    }
                    b.status = 0;
                    score++;
                    /*
                    if(score == brickRowCount*brickColumnCount) {
                        document.location.reload();
                        alert("YOU WIN, CONGRATULATIONS!");
                        clearInterval(interval); // Needed for Chrome to end game
                    }*/
                }
                if(b.x+brickWidth < mycanvas.width-10 && b.x > mycanvas.width-paddleHeight-10 && ((b.y < paddleY+paddleWidth && b.y > paddleY) || (b.y+brickHeight < paddleY+paddleWidth && b.y+brickHeight > paddleY))){
                    if(b.id == 1){
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
