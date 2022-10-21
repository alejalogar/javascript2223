const decimal = document.querySelector("#decimal")
decimal.value = 0
/* ***********************************************
                    SOLUCIÓN 3
        1 SOLO addEventListener PARA EL DIV PADRE
                DELEGACIÓN DE EVENTOS
************************************************** */



/* ***********************************************
                    SOLUCIÓN 2
        MISMO addEventListener PARA CADA BOTÓN
************************************************** */
const botones = document.querySelectorAll("#byte>button")
const pesos = [128,64,32,16,8,4,2,1]
for (let i=0; i<botones.length; i++) {
    botones[i].addEventListener("click",function(){
        if (botones[i].textContent == "0") {
            botones[i].textContent = "1"
            decimal.value = parseInt(decimal.value) + pesos[i]
        } else {
            botones[i].textContent = "0"
            decimal.value = parseInt(decimal.value) - pesos[i]
        }

        /* opción super compacta con operador % y ternario
        botones[i].textContent = ++botones[i].value % 2
        decimal.value = parseInt(decimal.value) + (botones[i].textContent == "1" ? pesos[i] : -pesos[i])
        */
    })
}

/* ***********************************************
                    SOLUCIÓN 1
    addEventListener DIFERENTE PARA CADA BOTÓN
************************************************** */
/*
const b7 = document.querySelector("#b7")
b7.addEventListener("click",function(){
    if (this.textContent == "0") {
        this.textContent = "1"
        decimal.value = parseInt(decimal.value) + 128
    } else {
        this.textContent = "0"
        decimal.value = parseInt(decimal.value) - 128
    }
})
const b6 = document.querySelector("#b6")
b6.addEventListener("click",function(){
    if (this.textContent == "0") {
        this.textContent = "1"
        decimal.value = parseInt(decimal.value) + 64
    } else {
        this.textContent = "0"
        decimal.value = parseInt(decimal.value) - 64
    }
})
const b5 = document.querySelector("#b5")
b5.addEventListener("click",function(){
    if (this.textContent == "0") {
        this.textContent = "1"
        decimal.value = parseInt(decimal.value) + 32
    } else {
        this.textContent = "0"
        decimal.value = parseInt(decimal.value) - 32
    }
})
const b4 = document.querySelector("#b4")
b4.addEventListener("click",function(){
    if (this.textContent == "0") {
        this.textContent = "1"
        decimal.value = parseInt(decimal.value) + 16
    } else {
        this.textContent = "0"
        decimal.value = parseInt(decimal.value) - 16
    }
})
const b3 = document.querySelector("#b3")
b3.addEventListener("click",function(){
    if (this.textContent == "0") {
        this.textContent = "1"
        decimal.value = parseInt(decimal.value) + 8
    } else {
        this.textContent = "0"
        decimal.value = parseInt(decimal.value) - 8
    }
})
const b2 = document.querySelector("#b2")
b2.addEventListener("click",function(){
    if (this.textContent == "0") {
        this.textContent = "1"
        decimal.value = parseInt(decimal.value) + 4
    } else {
        this.textContent = "0"
        decimal.value = parseInt(decimal.value) - 4
    }
})
const b1 = document.querySelector("#b1")
b1.addEventListener("click",function(){
    if (this.textContent == "0") {
        this.textContent = "1"
        decimal.value = parseInt(decimal.value) + 2
    } else {
        this.textContent = "0"
        decimal.value = parseInt(decimal.value) - 2
    }
})
const b0 = document.querySelector("#b0")
b0.addEventListener("click",function(){
    if (this.textContent == "0") {
        this.textContent = "1"
        decimal.value = parseInt(decimal.value) + 1
    } else {
        this.textContent = "0"
        decimal.value = parseInt(decimal.value) - 1
    }
})
*/