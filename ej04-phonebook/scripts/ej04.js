let phonebook = [
    { name: 'Luismi', number: '666333999'},
    { name: 'Antonia', number: '555123456'},
    { name: 'Hulk Hogan', number: '987654321'},
    { name: 'Donald Trump', number: '666666666'}
]

/*
    INSERT
*/
const inputName = document.querySelector("#inputName")
const inputNumber = document.querySelector("#inputNumber")
inputName.addEventListener("keyup", function(ev){
    if (ev.key == "Enter") {
        //saltar al campo del nombre
        inputNumber.focus()
    }
})
inputNumber.addEventListener("keyup", function(ev){
    if (ev.key == "Enter") {
        if (inputName.value == "" || inputNumber.value == "") {
            //gestionar el error, no pueden estar vacíos
        } else {
            //insertar el nombre y el número en la agenda
            phonebook.push( {
                              name: inputName.value,
                              number: inputNumber.value
                            } )
            //redibujamos el nuevo array phonebook con el nuevo elemento
            refreshTable(phonebook)
            inputName.value = ""
            inputNumber.value = ""
            inputName.focus()
        }
    }
})



/*
    SEARCH
*/
//const inputSearch = document.querySelector("div.container>div.input-group>input.form-control")
const inputSearch = document.querySelector("#inputSearch")
inputSearch.addEventListener("keyup",function(){
    let pattern = this.value //this = inputSearch
    let results = phonebook.filter(contact => contact.name.toLowerCase().includes(pattern.toLowerCase()) ||
                                              contact.number.includes(pattern) )
    refreshTable(results)
})

//const table = document.querySelector("#phonebooktable")
const tbody = document.querySelector("#phonebooktable>tbody")

function refreshTable(list) {
    //primero vaciamos el TBODY actual porque vamos a dibujar nuevas filas
    tbody.innerHTML = ""
    //segundo, dibujamos las nuevas filas pasadas como array en el parámetro
    list.forEach( contact => {
        //crear e insertar un nuevo TR en el TBODY de la tabla
        let newTR = tbody.insertRow()
        let newTD1 = newTR.insertCell()
        let newTD2 = newTR.insertCell()
        newTD1.textContent = contact.name
        newTD2.textContent = contact.number
    })
}

refreshTable(phonebook)







/*
let words = ['bitcoin','ethereum','polkadot','Solana','cardano','Near']

let numbers = [ 123, 456 , 100, 11, 99 ]

let objects = [
    { car: 'tesla model 3', autonomy: 460 },
    { car: 'bmw i3', autonomy: 280 },
    { car: 'peugeot 3008', autonomy: 325 },
    { car: 'toyota prius', autonomy: 112 }
]

console.log ( words.filter( elemento => elemento.length > 5 ) )
console.log ( words.filter( elemento => elemento.includes("dot") ) )

console.log( numbers.filter( n => n < 100 ) )
console.log( numbers.filter( n => n%2 == 0 ) )

console.log( objects.filter( c => c.autonomy > 300) )
console.log( objects.filter( c => c.car.includes("toyota") ) )
*/