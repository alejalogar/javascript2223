const nick = document.querySelector("#nick")
const teclado = document.querySelector("#teclado")
const chat = document.querySelector("#chat")
let ultimoRecibido = 0


//capturar el INTRO en el INPUT del mensaje 
teclado.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        //asegurarnos de que NICK y TEXTO no sean vacíos
        if (nick.value != "" && teclado.value != "") {
            console.log("entra")
            //enviar con FETCH el mensaje a la BD "chat_insert_post.php"
            const params = new URLSearchParams(
                "nick=" + nick.value
                + "&texto=" + teclado.value
            )
            const options = {
                method: 'POST',
                body: params
            }
            fetch( 'server/chat_insert_post.php', options )
                .then( response => console.log(response) )
        }
        teclado.value = ""
    }
})


//lanzar un INTERVAL para hacer FETCH de nuevos mensajes de la BD
// cada x milisegundos "chat_select_get_xml.php"
function consultarNuevosMensajes(id) {
    console.log("ultimoRecibido=" + id)
    fetch("server/chat_select_get_xml.php"+"?ultimo="+id)
    .then(respuesta => respuesta.text())
    .then(xmlCrudo => {
        //procesar el XML
        let parser = new DOMParser()
        let xml = parser.parseFromString(xmlCrudo,"text/xml")
        let mensajes = xml.querySelectorAll("mensaje")
        mensajes.forEach(mensaje => {
            let id = mensaje.children[0].textContent
            let nick = mensaje.children[1].textContent
            let texto = mensaje.children[2].textContent
            let instante = mensaje.children[3].textContent
            //Actualizo "ultimoRecibido" para que la próxima consulta
            // del interval pida solamente los mensajes nuevos
            ultimoRecibido = id
            let nuevoMensaje = document.createElement("DIV")
            nuevoMensaje.classList.add("mensaje")
            nuevoMensaje.textContent = nick + ": " + texto
            chat.append(nuevoMensaje)
            //Si hay muchos mensajes y no se ven todos,
            // aparece la barra de scroll vertical.
            // Forzamos a que vaya bajando el scroll automáticamente
            chat.scrollTop = chat.scrollHeight
        });
    })
    
}

let consultaMensajes = setInterval(function(){
        consultarNuevosMensajes(ultimoRecibido)
    },1000)
