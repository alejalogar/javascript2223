function mensajePopUpEnArchivo(){
    alert('Y adiós')
}

function saludoExtra(){
    alert('Qué limpito eres, HTML')
}

let boton4 = document.querySelector("#saludo4")
boton4.addEventListener("click",saludoExtra)
//esto da un error en la consola del navegador
// porque estoy intentando manipular un botón que todavía no
// ha procesado (está más abajo en el código HTML)