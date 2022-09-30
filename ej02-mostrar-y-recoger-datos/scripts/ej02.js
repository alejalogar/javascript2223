const inputTexto = document.querySelector("#inputTexto")
const divSalida = document.querySelector("#divSalida")
const botonProcesarDatos = document.querySelector("#botonProcesarDatos")
const botonPedirDatos = document.querySelector("#botonPedirDatos")

botonProcesarDatos.addEventListener("click",mostrarInfoAlUsuario)
botonPedirDatos.addEventListener("click",pedirDatoAlUsuario)

function mostrarInfoAlUsuario() {
    let textoDentroInput = inputTexto.value
    
    // 1ª forma: usar la consola del panel Herramientas de desarrollador
    console.log(textoDentroInput)
    console.warn(textoDentroInput)
    console.error(textoDentroInput)
    
    // 2ª forma: ventana emergente
    alert(textoDentroInput)

    // 3ª forma: escribir en la propia web (destruye el contenido!!!)
    //document.write(textoDentroInput)

    // 4ª forma: escribir en un elemento específico (label, div, td, h1, p)
    divSalida.innerHTML += textoDentroInput
    divSalida.innerHTML += "<br>"
}

function pedirDatoAlUsuario() {
    let textoEntrada = prompt("Escribe texto")
    divSalida.innerHTML += textoEntrada + "<br>"
}