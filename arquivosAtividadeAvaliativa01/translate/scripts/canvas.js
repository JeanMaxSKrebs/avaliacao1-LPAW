var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#6C7B8B";
ctx.fillRect(0,0,80,80);

ctx.translate(160,160);
ctx.fillStyle = "#CDB7B5";
ctx.fillRect(0,0,80,80);

ctx.fillStyle = "#63B8FF";
ctx.fillRect(100,100,80,80);
// 3a porque ele respeita o translate da linha 7


//3b colocando outro translate antes
ctx.translate(160,160);
ctx.fillStyle = "#CDB7B5";
ctx.fillRect(0,0,80,80);

ctx.translate(0,0)
ctx.fillStyle = "#63B8FF";
ctx.fillRect(100,100,80,80);