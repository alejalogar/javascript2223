const txtAdd = document.querySelector("#txtAdd")
const mylist = document.querySelector("#mylist")
const btnAdd = document.querySelector("#btnAdd")
//Recuperar los 5 botones de acciones de la lista de la compra
const btnSelAll = document.querySelector("#btnSelAll")
const btnSelNot = document.querySelector("#btnSelNot")
const btnInvSel = document.querySelector("#btnInvSel")
const btnMovSel = document.querySelector("#btnMovSel")
const btnDelSel = document.querySelector("#btnDelSel")

btnSelAll.addEventListener("click",function(){
    
})
btnSelNot.addEventListener("click",function(){
    
})
btnInvSel.addEventListener("click",function(){
    
})
btnMovSel.addEventListener("click",function(){
    
})
btnDelSel.addEventListener("click",function(){
    let selectedLIS = document.querySelectorAll("#mylist>li.seleccionado")
    selectedLIS.forEach(li => li.remove())
})

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
        //darle al nuevo LI comportamiento ante los clics
        nuevoLI.addEventListener("click",function(){
            /*
            if (this.classList.contains("seleccionado")) {
                //ya la tiene, se la quito
                this.classList.remove("seleccionado")
            } else {
                this.classList.add("seleccionado")
            }*/
            this.classList.toggle("seleccionado")
        })
        //vaciar la caja de texto y darle el foco de nuevo
        txtAdd.value = ""
        txtAdd.focus()
    }
}

