const ANCHURA_TABLERO = 600
const ALTURA_TABLERO = 300
const DIAMETRO_BOLA = 30

const bola = document.querySelector("#bola")
let bolaX = 0
let velX = 1 //mover a la derecha
bola.style.left = bolaX + "px"
let bolaY = 0
let velY = 1 //mover hacia abajo
bola.style.top = bolaY + "px"

let primeraLeyDeLaTermidinamica = setInterval(moverBola,10)

function moverBola() {
    bolaY += velY
    bola.style.top = bolaY + "px"
    bolaX += velX
    bola.style.left = bolaX + "px"
    //si alcanza el borde superior o inferior, cambiar de dirección
    if (bolaY > ALTURA_TABLERO - DIAMETRO_BOLA || bolaY < 0)
        velY = -velY
    //si alcanza el borde izquierdo o derecho, cambiar de dirección
    if (bolaX > ANCHURA_TABLERO - DIAMETRO_BOLA || bolaX < 0)
        velX = -velX
}