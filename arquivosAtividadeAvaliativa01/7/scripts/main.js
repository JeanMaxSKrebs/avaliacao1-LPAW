var myVar = setInterval(myTimer, 100);
// var qtdQuadrados = 0;
// if (qtdQuadrados == 10) {
//     myStopFunction();
// }
// qtdQuadrados++
let direita = true
let cima = true

let x = getRandom(700),
    y = getRandom(500),
    width = getRandom(100),
    height = getRandom(100)

console.log(x, y, width, height)

function myTimer() {
    limparTela()
    andar()
    if (verificarColisao()) {
        trocarDirecao()
        contexto.fillStyle = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    }
    

    contexto.fillRect(x, y, width, height)

}
// function myStopFunction() {
//     console.log("parou")
//     clearInterval(myVar);
// }