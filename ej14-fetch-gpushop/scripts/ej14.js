const buscador = document.querySelector("#buscador")
const cuerpoResultados = document.querySelector("#tableResultados>tbody")
const cuerpoSeleccionados = document.querySelector("#tableSeleccionados>tbody")
const inputBorrarTodos = document.querySelector("#inputBorrarTodos")
const pieSeleccionados = document.querySelector("#tableSeleccionados>tfoot")

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
// al TBODY de la tabla RESULTADOS, que es bisabuelo de los botones añadir
cuerpoResultados.addEventListener("click",function(ev){
    if (ev.target.nodeName.toLowerCase() == "button") {
        let producto = ev.target.parentNode.parentNode.children[0].textContent
        let precio = ev.target.parentNode.parentNode.children[1].textContent
        anyadirProductoACarrito(producto,precio)
        actualizarTotales()
    }
})

//delegamos el evento "click sobre los botones borrar"
// al TBODY de la tabla SELECCIONADOS, que es bisabuelo de los botones borrar
cuerpoSeleccionados.addEventListener("click",function(ev){
    if (ev.target.nodeName.toLowerCase() == "button") {
        ev.target.parentNode.parentNode.remove()
        actualizarTotales()
    }
})

inputBorrarTodos.addEventListener("click",function(){
    cuerpoSeleccionados.innerHTML = ""
    actualizarTotales()
})

function actualizarTotales() {
    let filas = Array.from(cuerpoSeleccionados.children)
    let totalNumProductos = filas.length

    let totalPrecio = 0
    filas.forEach(fila=>{
        //extraer el precio
        let precio = fila.children[1].textContent
        precio = precio.substring(0,precio.length-2)
        //sumar al total
        totalPrecio += parseFloat(precio)
    })

    //llevar esos totales al TFOOT
    let celdaNumProductos = pieSeleccionados.children[0].children[0]
    let celdaTotalPrecio = pieSeleccionados.children[0].children[1]
    
    if (totalNumProductos == 1)
        celdaNumProductos.textContent = "1 artículo"
    else 
        celdaNumProductos.textContent = totalNumProductos + " artículos"
    
    celdaTotalPrecio.textContent = totalPrecio + " €"
}

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