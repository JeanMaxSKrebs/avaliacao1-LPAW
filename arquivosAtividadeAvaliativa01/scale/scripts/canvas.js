// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// ctx.fillStyle = "#836FFF";
// ctx.fillRect(80,160,160,160); 
// ctx.save();

// ctx.scale(0.5,0.5); 

// ctx.restore();
// ctx.fillRect(240,240,160,160);

// por causa que o contexto é restaurado (linha 10) ao ponto onde foi salvo (linha 6)


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#836FFF";
ctx.fillRect(80,160,160,160); 

// ctx.scale(0.5,0.5); 

ctx.fillRect(240,240,160,160);

// retirando scale