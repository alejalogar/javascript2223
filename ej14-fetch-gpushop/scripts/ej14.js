const buscador = document.querySelector("#buscador")

//dar foco al input de búsqueda
buscador.focus()

//capturar el INTRO del input
buscador.addEventListener("keyup",function(ev){
    //si es un INTRO llamar al PHP
    if (ev.key == "Enter") {
        fetch("server/gpushop.php?pattern="+buscador.value)
        .then(resp => resp.json())
        .then(json => {
            json.forEach(resultado=>console.log(resultado))
        })
    }
})
