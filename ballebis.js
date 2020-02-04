// Initialisations des variables //
let x = mycanvas.width-30;
let y = mycanvas.height/2;
let dx = -2;
let dy = -2;
let ballRadius = 7;

// Fonction permettant le "mouvement" de la balle //
function drawBall() {
    ctx.beginPath();                               // Suppresion de la balle //
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);       // Affichage de la balle //
    ctx.fillStyle = "#33EC00";                     // Couleur de la balle //
    ctx.fill();
    ctx.closePath();
}