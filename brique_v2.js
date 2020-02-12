// Initialisations des variables //
let brickRowCount = 9;
let brickColumnCount = 1;
let brickWidth = 120;
let brickHeight = 50;
let brickPadding = 12;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let nivdif = 2;
let timme = 0;

// Création des tableaux bricks et brickfant et atribution de leurs valeurs//
let bricks = [];
for(let c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(let r=0; r<brickRowCount; r++) {
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


// Initialisation et definition de la fonction drawBricks() //
function drawBricks() {
    brickColumnCount++;
    timme++;
    if(timme == 3){
        nivdif += 3;
        timme = 0;
    }

    // Création de la brick du tableau brickfant[] //
    for(let c=0; c<1; c++) {
        for(let r=0; r<1; r++) {
            let brickX = (c*(brickWidth+brickPadding))-brickWidth;
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

    // Création de la colonne 1 du tableau bricks[] //
    let newcolumn = [];
    for(let c=0; c<brickColumnCount; c++) {
        newcolumn[c] = [];
        for(let r=0; r<brickRowCount; r++) {
            newcolumn[c][r] = { x: 0, y: 0, status: 1, id: 0};
        }
    }
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            if(newcolumn[c][r].id == 0) {
                let brickX = (c*(brickWidth+brickPadding))-brickWidth;
                let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                newcolumn[c][r].x = brickX;
                newcolumn[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#01FFBC";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
    newcolumn.push(bricks);
    bricks = newcolumn;
}


// Initialisation et definition de la fonction drawAvbricks() permettant "l'avancement" des bricks //
function drawAvbricks() {

    // Avancement des bricks non detruite //
    for(let c=0; c<1; c++) {
        for(let r=0; r<1; r++) {
            let brickX = bricksfant[c][r].x+0.2;
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

    // Avancement des bricks detruite par rapport à leur spécificité //
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            if(bricks[c][r].id == 0 && bricks[c][r].status == 1) {
                let brickX = bricks[c][r].x+0.2;
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
                    let brickX = bricks[c][r].x++*1.5;
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