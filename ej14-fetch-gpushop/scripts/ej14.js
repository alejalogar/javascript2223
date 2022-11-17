const buscador = document.querySelector("#buscador")
const cuerpoResultados = document.querySelector("#tableResultados>tbody")
const cuerpoSeleccionados = document.querySelector("#tableSeleccionados>tbody")

//dar foco al input de búsqueda
buscador.focus()

//capturar el INTRO del input
buscador.addEventListener("keyup",function(ev){
    //si es un INTRO llamar al PHP
    if (ev.key == "Enter") {
        fetch("server/gpushop.php?pattern="+buscador.value)
        .then(resp => resp.json())
        .then(json => {
            mostrarResultadosEnTabla(json)
        })
    }
})

//delegamos el evento "click sobre los botones añadir"
// al TBODY, por ejemplo, que es bisabuelo de los botones añadir
cuerpoResultados.addEventListener("click",function(ev){
    if (ev.target.nodeName.toLowerCase() == "button") {
        let producto = ev.target.parentNode.parentNode.children[0].textContent
        let precio = ev.target.parentNode.parentNode.children[1].textContent
        anyadirProductoACarrito(producto,precio)
    }
})

function anyadirProductoACarrito(producto,precio) {
    let unaFila = cuerpoSeleccionados.insertRow()
    let celda1 = unaFila.insertCell()
    let celda2 = unaFila.insertCell()
    let celda3 = unaFila.insertCell()
    celda1.textContent = producto
    celda2.textContent = precio
    celda3.innerHTML = "<button>X</button>"
}

function mostrarResultadosEnTabla(resultados) {
    cuerpoResultados.innerHTML = ""
    resultados.forEach(resultado=>{
        let unaFila = cuerpoResultados.insertRow()
        let celda1 = unaFila.insertCell()
        let celda2 = unaFila.insertCell()
        let celda3 = unaFila.insertCell()
        celda1.textContent = resultado.titulo
        celda2.textContent = resultado.precio + " €"

        celda3.innerHTML = "<button>+</button>"

    })
}