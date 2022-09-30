let empresas = ["Apple","Google","IBM","Microsoft","Nvidia","Intel","Embargos a lo bestia"]
const choice1 = document.querySelector("#choice1")
const choice2 = document.querySelector("#choice2")
const studentName = document.querySelector("#studentName")
const insertButton = document.querySelector("#insertButton")
const errorMsg = document.querySelector("#errorMsg")

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
    if (choice1.value && choice2.value && studentName.value.trim() != "") {
        errorMsg.textContent = ""
        //insertamos en tabla
        tableAdd(studentName.value, choice1.value, choice2.value)
    } else {
        errorMsg.textContent = "Debes rellenar correctamente los 3 campos"
    }
})



