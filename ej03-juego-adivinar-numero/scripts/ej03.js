let secreto = Math.floor(Math.random()*100+1)
let numIntentos = 6
//console.log(secreto)

const inputIntentos = document.querySelector("#inputIntentos")
const botonComprobar = document.querySelector("#botonComprobar")
const salida = document.querySelector("#salida")

botonComprobar.addEventListener("click",comprobarIntento)

inputIntentos.addEventListener("keyup", function(ev){
    if (ev.key == "Enter") {
        comprobarIntento()
    }
} )

function comprobarIntento() {
    let intento = parseInt(inputIntentos.value)

    salida.value += intento + ": "

    if (intento == secreto) {
        //ACIERTAS
        salida.value += "¡Aciertas!" + "\n"
        terminarPartida()
    } else if (intento < secreto) {
        //TE QUEDAS CORTO
        salida.value += "Te quedas corto" + "\n"
    } else {
        //TE PASAS
        salida.value += "Te pasas" + "\n"
    }
    numIntentos--
    if (numIntentos == 0) {
        //FIN DE LA PARTIDA
        terminarPartida()
    }
    salida.value += "Te quedan " + numIntentos + " intentos\n"

    //vaciado del INPUT
    inputIntentos.value = ""
}

function terminarPartida() {
    salida.value += "¡HAS ACERTADO!"
    inputIntentos.disabled = true
    botonComprobar.disabled = true
}