let empresas = ["Apple","Google","IBM","Microsoft","Nvidia","Intel","Embargos a lo bestia"]
const choice2 = document.querySelector("#choice2")

//Rellenar el primer SELECT
    //1.recuperar el primer SELECT
    const choice1 = document.querySelector("#choice1")

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

    let posicionDeLaEmpresaElegida = choice1.selectedIndex
    let optionEnLaPosicionElegida = choice1.options[posicionDeLaEmpresaElegida]
    let valueDelOptionElegido = optionEnLaPosicionElegida.value
    //mucho más resumido:
    //alert("Empresa elegida: " + choice1.options[choice1.selectedIndex].value)

    Array.from(choice1.options).forEach( opt => {
        
        choice2.append(opt.cloneNode(true))
    })
}



