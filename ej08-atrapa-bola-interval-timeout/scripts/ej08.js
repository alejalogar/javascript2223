const tablero = document.querySelector("#tablero")
const bola = document.querySelector("#bola")
const btnEmpezar = document.querySelector("#btnEmpezar")

const ANCHURA_TABLERO = 600
const ALTURA_TABLERO = 300
const DIAMETRO_BOLA = 30

tablero.style.width = ANCHURA_TABLERO + "px"
tablero.style.height = ALTURA_TABLERO + "px"
bola.style.width = DIAMETRO_BOLA + "px"
bola.style.height = DIAMETRO_BOLA + "px"

btnEmpezar.addEventListener("click",function(){
    let nuevoTop = Math.random()* (ALTURA_TABLERO-DIAMETRO_BOLA)
    bola.style.top = nuevoTop + "px"
    let nuevoLeft = Math.random()* (ANCHURA_TABLERO-DIAMETRO_BOLA)
    bola.style.left = nuevoLeft + "px"
})