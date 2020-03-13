const largura = window.innerWidth
const altura = window.innerHeight
const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')

/*definições canvas*/
canvas.style.position = "absolute"
canvas.style.left = "12.5vw"
canvas.style.top = "12.5vh"
canvas.style.backgroundColor = "white"

canvas.height = altura * 0.75
canvas.width = largura * 0.75

console.log(altura * 0.75)
console.log(largura * 0.75)

contexto.beginPath()
contexto.strokeRect(0,0,canvas.width, canvas.height)
