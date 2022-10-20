const ANCHURA_TABLERO = 600
const ALTURA_TABLERO = 300
const DIAMETRO_BOLA = 30
const tablero = document.querySelector("#tablero")

let bolas = []

function addBall() {
    //incorporar un nuevo DIV bola al árbol DOM
    let newDOMball = document.createElement("DIV")
    tablero.append(newDOMball)
    //incorporar una nueva instancia de Bola al array "bolas"
    let bolaX = Math.random()* (ANCHURA_TABLERO-DIAMETRO_BOLA)
    let bolaY = Math.random()* (ALTURA_TABLERO-DIAMETRO_BOLA)
    let velX = Math.random()*2 - 1
    let velY = Math.random()*2 - 1
    let newBall = new Bola(newDOMball,bolaX,bolaY,velX,velY)
    bolas.push(newBall)
    //ajustar propiedades CSS del DIV recién creado
    newDOMball.style.left = bolaX + "px"
    newDOMball.style.top = bolaY + "px"
    let r = Math.random()*255
    let g = Math.random()*255
    let b = Math.random()*255
    //newDOMball.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
    newDOMball.style.backgroundColor = `rgb(${r},${g},${b})`
    newDOMball.classList.add("bola")
}

addBall()
addBall()
addBall()


function remBall() {

}


function moveBall() {
    bolas.forEach(b => {
        b.posY += b.velY
        b.posX += b.velX
        b.bola.style.top = b.posY + "px"
        b.bola.style.left = b.posX + "px"
        //si alcanza el borde superior o inferior, cambiar de dirección
        if (b.posY > ALTURA_TABLERO - DIAMETRO_BOLA || b.posY < 0)
            b.velY = -b.velY
        //si alcanza el borde izquierdo o derecho, cambiar de dirección
        if (b.posX > ANCHURA_TABLERO - DIAMETRO_BOLA || b.posX < 0)
            b.velX = -b.velX
    })
}

let primeraLeyDeLaTermidinamica = setInterval(moveBall,5)