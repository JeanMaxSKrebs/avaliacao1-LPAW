var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");

function verificarColisao() {
    if (x <= 0) {
        x = x + 10
        return true
    }
    if (y <= 0) {
        y = y + 10
        return true
    }
    if (x + width >= canvas.width) {
        x = x - 10
        return true
    }
    if (y + height >= canvas.height) {
        y = y - 10
        return true
    }
}

function trocarDirecao() {
    a = getRandom(2)

    if (a == 1)
        direita = true
    else
        direita = false

    a = getRandom(2)

    if (a == 1)
        cima = true
    else
        cima = false
}

function andar() {
    if (direita)
        x = x + 10
    else
        x = x - 10

    if (cima)
        y = y + 10
    else
        y = y - 10
}


function limparTela() {
    contexto.clearRect(0, 0, canvas.width, canvas.height)
}


function getRandom(value) {
    return Math.floor(Math.random() * value + 1);
}