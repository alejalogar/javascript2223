const formMultas = document.querySelector("form")
formMultas.addEventListener("submit",function(ev){
    ev.preventDefault()
    if (formOK()) this.submit()
})

const conductorError = document.querySelector("#conductorError")
const dniError = document.querySelector("#dniError")
function formOK() {
    let todoOK = true

    if (!nombreOK()) {
        todoOK = false
        conductorError.textContent = "El nombre debe tener al menos "
    } else {
        conductorError.textContent = ""
    }

    let msg = ""
    switch (dniOK()) {
        case 0: break
        case 1: todoOK = false
                msg = "El DNI debe seguir el patrón 12345678A"
                break
        case 2: todoOK = false
                msg = "La letra no corresponde a ese número"
                break
    }
    dniError.textContent = msg

    /*
    if (!edadOK()) {
        todoOK = false
        //mostrar error
    }
    if (!vigenciaOK()) {
        todoOK = false
        //mostrar error
    }
    if (!tipoCarneOK()) {
        todoOK = false
        //mostrar error
    }
    if (!tipoInfraccionOK()) {
        todoOK = false
        //mostrar error
    }
    */
    return todoOK
}

const conductor = document.querySelector("#conductor")
function nombreOK() {
    return conductor.value.length >= 3
}

const dni = document.querySelector("#dni")
function dniOK() {
    //expreg para patron 12345678A
    let expregdni = /^\d{8}-?[A-Za-z]$/
    /* let expregdni = /^[0-9]{8}-{0,1}[A-Za-z]$/     */
    //comprobación de que la letra es la que corresponde al número
    if (expregdni.test(dni.value)) {
        //comprobar la letra
        const letras = "TRWAGMYFPDXBNJZSQVHLCKET"
        let digitos = dni.value.substr(0,8)
        console.log("digitos="+digitos)
        let letra = dni.value.substr(dni.value.length-1,1).toUpperCase()
        console.log("letra="+letra)
        if (letras.charAt(digitos%23) == letra) {
            return 0
        } else {
            console.log("ha fallado la letra")
            return 2
        }
    } else {
        console.log("ha fallado la exp reg")
        return 1
    }
}