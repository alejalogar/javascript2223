const refPedido = document.querySelector("#refPedido")
const peso = document.querySelector("#peso")
const refPedidoError = document.querySelector("#refPedidoError")
const pesoError = document.querySelector("#pesoError")

const formEnvios = document.querySelector("#formEnvios")
formEnvios.action = "todoOK.html"

formEnvios.addEventListener("submit",function(ev){
    ev.preventDefault() //impedir que el formulario se envíe
    //vaciar los LABEL
    let labelsDelForm = document.querySelectorAll("#formEnvios label")
    labelsDelForm.forEach(label => label.textContent = "")

    //comprobaciones
    let todoOK = true

    if (!numrefOK()) {
        todoOK = false
        //advertir al usuario
        refPedidoError.textContent = "Debe seguir el patrón A12345"
    }

    if (!pesoOK()) {
        todoOK = false
        //advertir al usuario
        pesoError.textContent = "Debe seguir el patrón 0.0 o 0,0 o 00.0 o 00,0"
    }

    //si todo OK entonces lanzo el submit()
    if (todoOK) this.submit()
})

function numrefOK() {
    let numOK = true
    //una letra mayúscula entre A y F seguida de 5 digitos
    let expreg = /^[A-F][0-9]{5}$/
    if ( expreg.test(refPedido.value) ) {
        //bien, pasa el test
    } else {
        //mal, no pasa el test
        numOK = false
    }
    return numOK
}

function pesoOK() {
    //admite entre 0,0 o 0.0 y 99.9 o 99,9
    let expreg = /^[0-9]{1,2}[\.,][0-9]$/
    return expreg.test(peso.value)
}