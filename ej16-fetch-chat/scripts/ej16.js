const nick = document.querySelector("#nick")
const teclado = document.querySelector("#teclado")

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
    }
})









//lanzar un INTERVAL para hacer FETCH de nuevos mensajes de la BD
// cada x milisegundos "chat_select_get_xml.php"


