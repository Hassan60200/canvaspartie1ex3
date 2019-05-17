var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// base de la maison
ctx.fillStyle = '#51a650';
    ctx.fillRect(100, 50, 200, 50); // fillRect(x, y, largeur, hauteur)
    // Corps de la voiture
    ctx.fillStyle = '#51a650';
    ctx.fillRect(60, 100, 300, 50)

    ctx.fillStyle = '#cecece';
    ctx.arc(300,150,32,0,Math.PI*2,false);
    ctx.stroke();
    ctx.fill();

ctx.fillStyle = '#cecece';
ctx.arc(100,150,32,0,Math.PI*2,false);
ctx.stroke();
 ctx.fill();
