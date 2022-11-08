/*

OBJETIVO IDEAL
    Resolverlo sin mirar ejercicios anteriores
OBJETIVO ACEPTABLE
    Resolverlo mirando ejercicios anteriores
OBJETIVO INSUFICIENTE
    Resolver sólo entre 1 y 3 puntos del enunciado

1) Foco en el INPUT del nombre
2) Al pulsar Intro salta al INPUT de los puntos
3) Al pulsar Intro en el INPUT de los puntos:
    a) Sólo acepta números enteros
    b) Si OK:
        * se guarda la puntuación con el nombre
        * se vacían los campos
        * el foco vuelve al INPUT del nombre
        * se actualiza la tabla en pantalla (si necesario)
4) En la tabla:
    a) Se muestran las puntuaciones de mayor a menor
    b) Sólo se muestran las 5 mejores aunque internamente
        haya muchas más almacenadas
5) Al refrescar la página, los puntos no se pierden
*/

const inputName = document.querySelector("#inputName")
const inputPoints = document.querySelector("#inputPoints")

let cache = localStorage.getItem("records")
let records = (cache ? JSON.parse(cache) : [])

inputName.addEventListener("keyup", function(ev){
    if (ev.key == "Enter") {
        //saltar al campo del nombre
        inputPoints.focus()
    }
})
inputPoints.addEventListener("keyup", function(ev){
    if (ev.key == "Enter") {
        this.value = this.value.trim()
        if (inputPoints.value == "" || isNaN(inputPoints.value)) {
            //gestionar el error
            inputPoints.value = ""
            inputPoints.classList.add("invalid")
            inputPoints.placeholder = "Only numbers accepted"
        } else {
            //borrar señales de error
            inputPoints.classList.remove("invalid")
            inputPoints.removeAttribute("placeholder")
            //guardar el record
            records.push( {
                            name: inputName.value,
                            points: parseInt(inputPoints.value)
                          } )
            localStorage.setItem("records",JSON.stringify(records))
            //reordenar los records tras la nueva inserción
            records.sort((a,b) => a.points < b.points)
            //mostrar los nuevos 5 mejores records
            refreshTable(records.slice(0,5))
            //resetear campos
            inputName.value = ""
            inputPoints.value = ""
            inputName.focus()
        }
    }
})

const tbody = document.querySelector("#recordsTable>tbody")

function refreshTable(list) {
    //primero vaciamos el TBODY actual porque vamos a dibujar nuevas filas
    tbody.innerHTML = ""
    //segundo, dibujamos las nuevas filas pasadas como array en el parámetro
    list.forEach( element => {
        //crear e insertar un nuevo TR en el TBODY de la tabla
        let newTR = tbody.insertRow()
        let newTD1 = newTR.insertCell()
        let newTD2 = newTR.insertCell()
        newTD1.textContent = element.name
        newTD2.textContent = element.points
    })
}

refreshTable(records.slice(0,5))
inputName.focus()
