let brickRowCount = 9;
let brickColumnCount = 1;
let brickWidth = 120;
let brickHeight = 50;
let brickPadding = 12;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let nivdif = 2;
let cmarge = 0;
let timme = 0;

let bricks = [];
for(let c=0; c<100; c++) {
    bricks[c] = [];
    for(let r=0; r<100; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1, id: 0};
    }
}

let bricksfant = [];
for(let c=0; c<1; c++) {
    bricksfant[c] = [];
    for(let r=0; r<1; r++) {
        bricksfant[c][r] = { x: 0, y: 0, status: 1, id: 0};
    }
}

function drawBricks() {
    cmarge++;
    brickColumnCount++;
    timme++;
    if(cmarge == 3){
        brickRowCount++;
        timme = 0;
        brickWidth -= 9.5;
        brickHeight -= 208;
        brickPadding -= 0.7;
    }
    for(let c=0; c<1; c++) {
        for(let r=0; r<1; r++) {
            let brickX = (c*(brickWidth+brickPadding))-brickWidth;
            let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricksfant[c][r].x = brickX;
            bricksfant[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            for(let c=cmarge; c<brickColumnCount; c++) {
                for(let r=0; r<brickRowCount; r++) {
                    if(bricks[c][r].status == 1) {
                        let brickX = (c*(brickWidth+brickPadding))-brickWidth;
                        let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                        bricks[c][r].x = brickX;
                        bricks[c][r].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        ctx.fillStyle = "#01FFBC";
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
            ctx.fillStyle = '#eee';
            ctx.fill();
            ctx.closePath();
        }
    }
    for(let c=cmarge; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                let brickX = (c*(brickWidth+brickPadding))-brickWidth;
                let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#01FFBC";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function drawAvbricks() {
    for(let c=0; c<1; c++) {
        for(let r=0; r<1; r++) {
            let brickX = bricksfant[c][r].x+0.02;
            let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricksfant[c][r].x = brickX;
            bricksfant[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = '#eee';
            ctx.fill();
            ctx.closePath();
        }
    }
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                let brickX = bricks[c][r].x+0.02;
                let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#01FFBC";
                ctx.fill();
                ctx.closePath();

            }else {
                let b = bricks[c][r];
                if(b.id == 1){
                    let brickX = bricks[c][r].x++*2;
                    let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                    
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "#DDDAD9";
                    ctx.fill();
                    ctx.closePath();
                }else if(b.id == 2){
                    let brickX = bricks[c][r].x++;
                    let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                    
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "#ff0000";
                    ctx.fill();
                    ctx.closePath();
                }else if(b.id == 3){
                    let brickX = bricks[c][r].x++;
                    let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;

                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "#FFEF01";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
}