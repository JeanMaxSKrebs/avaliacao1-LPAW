var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#6C7B8B"; 
ctx.fillRect(50, 50, 75, 50);

ctx.globalCompositeOperation = "source-atop";

ctx.fillStyle = "#63B8FF";
ctx.fillRect(20, 20, 75, 50);




