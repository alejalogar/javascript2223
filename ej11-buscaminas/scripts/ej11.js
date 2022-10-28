const tablero = document.querySelector("#tablero")
const labelFila = document.querySelector("#fila")
const labelColumna = document.querySelector("#columna")
const labelMina = document.querySelector("#mina")

let ANCHO = 9
let ALTO = 9
generarTablero(ANCHO,ALTO)
colocarMinas(ANCHO,ALTO,10)


function generarTablero(ancho,alto) {
    tablero.style.width = ancho * 32 + "px"
    for (let i=0; i<ancho*alto; i++) {
        let nuevaCelda = document.createElement("DIV")
        nuevaCelda.classList.add("celda")

        nuevaCelda.dataset.fila = Math.floor(i / ancho)
        nuevaCelda.dataset.columna = i % ancho
        nuevaCelda.dataset.mina = false
        nuevaCelda.dataset.clicado = false

        /* para evitar ejecutar este bloque 81 veces,
           lo sustituimos por delegación de eventos
        nuevaCelda.addEventListener("mouseover",()=>{
            labelFila.textContent = nuevaCelda.dataset.fila
            labelColumna.textContent = nuevaCelda.dataset.columna
            labelMina.textContent = nuevaCelda.dataset.mina
        })*/

        tablero.append(nuevaCelda)
    }
    //Delegación de eventos: asignamos el listener 1 sola vez
    // al DIV tablero (padre de las celdas) para ahorrarnos 81
    // listeners en las celdas
    tablero.addEventListener("mouseover",function(ev){
        let celda = ev.target
        labelFila.textContent = celda.dataset.fila
        labelColumna.textContent = celda.dataset.columna
        labelMina.textContent = celda.dataset.mina
    })

    tablero.addEventListener("click",function(ev){
        let celda = ev.target
        if (celda.dataset.mina == "true") {
            celda.classList.replace("mina","mina_explotada")
            perderPartida()
        } else {
            //CALCULAR CUÁNTAS MINAS HAY ALREDEDOR DE LA CLICADA
            let numMinasAlrededor = calcularMinasAlrededor(celda)
            celda.classList.add("celda","celda_clicada"+numMinasAlrededor)
        }
    })
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

function calcularMinasAlrededor(celda) {
    let contador = 0
    const todasLasCeldas = document.querySelectorAll(".celda")

    //arriba izq
    if (celda.dataset.fila > "0" && celda.dataset.columna > "0") {
        let fila = parseInt(celda.dataset.fila) - 1
        let columna = parseInt(celda.dataset.columna) - 1
        let celdaArrIzq = todasLasCeldas[ fila*ANCHO + columna]
        if (celdaArrIzq.dataset.mina == "true")
            contador++
    }

    //arriba
     if (celda.dataset.fila > "0" ) {
        let fila = parseInt(celda.dataset.fila) - 1
        let columna = parseInt(celda.dataset.columna)
        let celdaArr = todasLasCeldas[ fila*ANCHO + columna]
        if (celdaArr.dataset.mina == "true")
            contador++
    }
    //arriba der
    if (celda.dataset.fila > "0" && celda.dataset.columna < ANCHO-1) {
        let fila = parseInt(celda.dataset.fila) - 1
        let columna = parseInt(celda.dataset.columna) + 1
        let celdaArrDer = todasLasCeldas[ fila*ANCHO + columna]
        if (celdaArrDer.dataset.mina == "true")
            contador++
    }
    //izq
    if (celda.dataset.columna > "0" ) {
        let fila = parseInt(celda.dataset.fila)
        let columna = parseInt(celda.dataset.columna) - 1
        let celdaIzq = todasLasCeldas[ fila*ANCHO + columna]
        if (celdaIzq.dataset.mina == "true")
            contador++
    }
    //der
    if (celda.dataset.columna < ANCHO-1 ) {
        let fila = parseInt(celda.dataset.fila)
        let columna = parseInt(celda.dataset.columna) + 1
        let celdaDer = todasLasCeldas[ fila*ANCHO + columna]
        if (celdaDer.dataset.mina == "true")
            contador++
    }
    //abajo izq
    if (celda.dataset.fila < ALTO-1 && celda.dataset.columna > "0") {
        let fila = parseInt(celda.dataset.fila) + 1
        let columna = parseInt(celda.dataset.columna) - 1
        let celdaAbaIzq = todasLasCeldas[ fila*ANCHO + columna]
        if (celdaAbaIzq.dataset.mina == "true")
            contador++
    }
    //abajo
    if (celda.dataset.fila < ALTO-1 ) {
        let fila = parseInt(celda.dataset.fila) + 1
        let columna = parseInt(celda.dataset.columna) - 1
        let celdaAba = todasLasCeldas[ fila*ANCHO + columna]
        if (celdaAba.dataset.mina == "true")
            contador++
    }
    //abajo der
    if (celda.dataset.fila < ALTO-1 && celda.dataset.columna < ANCHO-1) {
        let fila = parseInt(celda.dataset.fila) + 1
        let columna = parseInt(celda.dataset.columna) - 1
        let celdaAbaDer = todasLasCeldas[ fila*ANCHO + columna]
        if (celdaAbaDer.dataset.mina == "true")
            contador++
    }
    return contador
}


function perderPartida() {
    console.error("HAS PERDIDO")
}