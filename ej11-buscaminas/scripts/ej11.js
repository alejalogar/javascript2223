const tablero = document.querySelector("#tablero")
const labelFila = document.querySelector("#fila")
const labelColumna = document.querySelector("#columna")
const labelMina = document.querySelector("#mina")

generarTablero(9,9)
colocarMinas(9,9,10)


function generarTablero(ancho,alto) {
    tablero.style.width = ancho * 32 + "px"
    for (let i=0; i<ancho*alto; i++) {
        let nuevaCelda = document.createElement("DIV")
        nuevaCelda.classList.add("celda")

        nuevaCelda.dataset.fila = Math.floor(i / ancho)
        nuevaCelda.dataset.columna = i % ancho
        nuevaCelda.dataset.mina = false
        nuevaCelda.dataset.clicado = false

        nuevaCelda.addEventListener("mouseover",()=>{
            labelFila.textContent = nuevaCelda.dataset.fila
            labelColumna.textContent = nuevaCelda.dataset.columna
            labelMina.textContent = nuevaCelda.dataset.mina
        })

        tablero.append(nuevaCelda)
    }
}

function colocarMinas(ancho,alto,numMinas) {
    let minasRestantes = numMinas
    const todasLasCeldas = document.querySelectorAll(".celda")

    while (minasRestantes > 0) {
        //generar aleatoriamente una nueva mina en [0,81)
        let posicion = Math.floor( Math.random() * ancho*alto )

        if (todasLasCeldas[posicion].dataset.mina == "true") {
            //ya existe mina en esa celda
            //no hacer nada
        } else {
            //no hay mina en esta celda
            //colocar mina y decrementar contador de minas restantes
            todasLasCeldas[posicion].dataset.mina = true
            todasLasCeldas[posicion].classList.add("mina")
            minasRestantes--
        }
    }
}