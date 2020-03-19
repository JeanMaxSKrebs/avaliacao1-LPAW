var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radianos = Math.PI / 180;
ctx.translate(250,250)

ctx.fillRect(50,50,80,80);
// pois foi usado rotate antes, o rotate gira a tela na porcentagem colocado como parametro, no caso em 45 graus

ctx.fillStyle = 'pink'
ctx.translate(50,50)
ctx.rotate( 45 * radianos);
ctx.translate(-50,-50)

ctx.fillStyle = 'pink'
ctx.fillRect(50, 50, 80, 80);