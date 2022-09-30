let empresas = ["Apple","Google","IBM","Microsoft","Nvidia","Intel","Embargos a lo bestia"]

//Rellenar el primer SELECT
    //1.recuperar el primer SELECT
    const choice1 = document.querySelector("#choice1")

    /*for(let i=0; i<empresas.length; i++) {

    }*/
    
    empresas.forEach(empresa => {
        //2.crear un nodo para un nuevo OPTION
        let nuevoOption = document.createElement("OPTION")
        //3.establecer sus atributos VALUE y TEXTCONTENT

        nuevoOption.value = /* SEGUIR POR AQUI */
        
        nuevoOption.textContent = empresa
        //4.hacer que este nuevo nodo sea hijo del nodo SELECT
        choice1.append(nuevoOption)
    })



//2.asignarle un listener para el evento CHANGE
choice1.addEventListener("change",mostrarEmpresaElegida)

//3.que la función asociada al CHANGE muestre en pantalla la empresa
// elegida por el usuario
function mostrarEmpresaElegida() {
    let posicionDeLaEmpresaElegida = choice1.selectedIndex
    let optionEnLaPosicionElegida = choice1.options[posicionDeLaEmpresaElegida]
    let textoDelOptionElegido = optionEnLaPosicionElegida.textContent

    alert("Empresa elegida: " + textoDelOptionElegido)

    //mucho más resumido:
    //alert("Empresa elegida: " + choice1.options[choice1.selectedIndex].textContent)
}



