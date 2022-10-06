let empresas = ["Apple","Google","IBM","Microsoft","Nvidia","Intel","Embargos a lo bestia"]
const choice1 = document.querySelector("#choice1")
const choice2 = document.querySelector("#choice2")
const studentName = document.querySelector("#studentName")
const insertButton = document.querySelector("#insertButton")
const errorMsg = document.querySelector("#errorMsg")
const cuerpoTable = document.querySelector("#studentsChoices>tbody")

//Rellenar el primer SELECT
    /*for(let i=0; i<empresas.length; i++) {
    }*/
    empresas.forEach( (empresa,i) => {
        //2.crear un nodo para un nuevo OPTION
        let nuevoOption = document.createElement("OPTION")
        //3.establecer sus atributos VALUE y TEXTCONTENT
        nuevoOption.value = i+1 //el value de la 1ª empresa será 0+1=1
        nuevoOption.textContent = empresa
        //4.hacer que este nuevo nodo sea hijo del nodo SELECT
        choice1.append(nuevoOption)
    })

//2.asignarle un listener para el evento CHANGE
choice1.addEventListener("change",rellenarSegundoSelect)

//3.que la función asociada al CHANGE rellene de empresas el 2º SELECT
function rellenarSegundoSelect() {
    //vaciarlo primero por si ya tuviera OPTIONS de anteriores selecciones
    choice2.innerHTML = ""

    if (choice1.value > 0) {
        Array.from(choice1.options).forEach( opt => {
            if (opt.value != choice1.value)
            choice2.append(opt.cloneNode(true))
        }) 
    }
}

insertButton.addEventListener("click",function(){
    //este botón sólo insertará en tabla cuando los 3 campos estén OK
    if (choice1.value != "0" && choice2.value != "0" && studentName.value.trim() != "") {
        errorMsg.textContent = ""
        //insertamos en tabla
        tableAdd(studentName.value,
                 choice1.options[choice1.selectedIndex].textContent,
                 choice2.options[choice2.selectedIndex].textContent
            )
    } else {
        errorMsg.textContent = "Debes rellenar correctamente los 3 campos"
    }
})
function tableAdd(s,e1,e2) {
    const nuevoTR = document.createElement("TR")
    const nuevoTD1 = document.createElement("TD")
    const nuevoTD2 = document.createElement("TD")
    const nuevoTD3 = document.createElement("TD")
    const nuevoTD4 = document.createElement("TD")
    nuevoTD1.textContent = s
    nuevoTD2.textContent = e1 
    nuevoTD3.textContent = e2

    const nuevoBotonBorrar = document.createElement("BUTTON")
    nuevoBotonBorrar.textContent = "X"
    nuevoBotonBorrar.classList.add("btn","btn-danger", "btn-sm")
    nuevoTD4.append(nuevoBotonBorrar)
    nuevoBotonBorrar.addEventListener("click",function(){
        nuevoTR.remove()
        //this.parentNode.parentNode.remove()
        //this.parentElement.parentElement.remove()
    })
    nuevoTR.append(nuevoTD1,nuevoTD2,nuevoTD3,nuevoTD4)
    cuerpoTable.append(nuevoTR)
    /* ALTERNATIVA EN EL CASO DE TABLAS 
        let nuevoTR = cuerpoTable.insertRow()
        let nuevoTD1 = nuevoTR.insertCell()
        let nuevoTD2 = nuevoTR.insertCell()
        let nuevoTD3 = nuevoTR.insertCell()
        nuevoTD1.textContent = s
        nuevoTD2.textContent = e1
        nuevoTD3.textContent = e2
    */
   //resetear el formulario
   choice1.value = 0    //elegir el option con value = 0, el primero
   choice2.innerHTML = ""  //eliminar los options
   studentName.value = ""  //vaciar la caja de texto
}



