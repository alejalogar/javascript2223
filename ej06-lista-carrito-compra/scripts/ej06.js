const txtAdd = document.querySelector("#txtAdd")
const mylist = document.querySelector("#mylist")
const btnAdd = document.querySelector("#btnAdd")

txtAdd.focus()

txtAdd.addEventListener("keyup",function(evento){
    if (evento.key == "Enter")
        addItemToList()
})

btnAdd.addEventListener("click",addItemToList)

function addItemToList(){
    let texto = txtAdd.value.trim()
    if (texto.length) {
        //añadir elemento a la lista
        const nuevoLI = document.createElement("LI")
        nuevoLI.textContent = texto
        mylist.append(nuevoLI)
        //vaciar la caja de texto y darle el foco de nuevo
        txtAdd.value = ""
        txtAdd.focus()
    }
}