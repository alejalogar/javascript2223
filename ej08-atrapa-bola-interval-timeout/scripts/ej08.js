const tablero = document.querySelector("#tablero")
const bola = document.querySelector("#bola")
const btnEmpezar = document.querySelector("#btnEmpezar")

const tiempo = document.querySelector("#tiempo")
const puntos = document.querySelector("#puntos")

const ANCHURA_TABLERO = 600
const ALTURA_TABLERO = 300
const DIAMETRO_BOLA = 30

let partidaEnMarcha = false
let crono
let agitador

tablero.style.width = ANCHURA_TABLERO + "px"
tablero.style.height = ALTURA_TABLERO + "px"
bola.style.width = DIAMETRO_BOLA + "px"
bola.style.height = DIAMETRO_BOLA + "px"

btnEmpezar.addEventListener("click",function(){
    //posicionar aleatoriamente la bola al comienzo de la partida
    moverBola()
    //establece los valores iniciales de tiempo y puntos
    tiempo.textContent = 10
    puntos.textContent = 0
    //resetea los intervals
    clearInterval(crono)
    crono = setInterval(pasaUnSegundo,1000)
    clearInterval(agitador)
    agitador = setInterval(moverBola,1000)
    //pone en marcha la partida
    partidaEnMarcha = true
})

bola.addEventListener("click",function(){
    if (partidaEnMarcha) {
        puntos.textContent++
        moverBola()
        clearInterval(agitador)
        //agitador = setInterval(moverBola,1000)
        agitador = setInterval(moverBola,1000-puntos.textContent*50)
    }
})

function pasaUnSegundo() {
    tiempo.textContent--
    if (tiempo.textContent == 0) {
        //la partida ha terminado
        partidaEnMarcha = false
        clearInterval(crono)
        clearInterval(agitador)
    }
}

function moverBola() {
    let nuevoTop = Math.random()* (ALTURA_TABLERO-DIAMETRO_BOLA)
    bola.style.top = nuevoTop + "px"
    let nuevoLeft = Math.random()* (ANCHURA_TABLERO-DIAMETRO_BOLA)
    bola.style.left = nuevoLeft + "px"
}