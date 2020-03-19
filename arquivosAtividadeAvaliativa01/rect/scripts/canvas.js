var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(80, 160, 160, 160);
ctx.stroke();

// Resposta: Utilizando o método strokeRect(x,y,width,height)

contexto.strokeRect(110, 110, 100, 100);

contexto.clearRect(0, 0, canvas.width, canvas.height)
contexto.strokeRect(0,0,canvas.width, canvas.height)

// Resposta: Não, apenas com sombreamento, pois utilizamos a sombra como um quadrado
contexto.save()
contexto.shadowColor= '#BEBEBE'
contexto.shadowOffsetX= 100
contexto.fillRect(110, 110, 100, 100);
contexto.restore()