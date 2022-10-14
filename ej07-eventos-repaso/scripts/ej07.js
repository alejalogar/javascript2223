const sacoboxeo = document.querySelector("#sacoboxeo")
const huella = document.querySelector("#huella")
const mensajes = document.querySelector("#mensajes")
const coordx = document.querySelector("#coordx")
const coordy = document.querySelector("#coordy")

//sacoboxeo.addEventListener("contextmenu", e => e.preventDefault());
sacoboxeo.addEventListener("contextmenu", function(e) {
    e.preventDefault()
    mensajes.textContent += "Has hecho clic secundario. "
})
sacoboxeo.addEventListener("click", function(ev){
    mensajes.textContent += "Has hecho clic principal. "
    huella.style.left = ev.offsetX + "px"
    huella.style.top = ev.offsetY + "px"
})
sacoboxeo.addEventListener("mouseenter", function(){
    mensajes.textContent += "Entras al saco de boxeo. "
    this.style.backgroundColor = "grey"
})
sacoboxeo.addEventListener("mouseout", function(){
    mensajes.textContent += "Sales del saco de boxeo. "
    this.style.backgroundColor = "lightgrey"
})
sacoboxeo.addEventListener("mouseover", function(){
    mensajes.textContent += "Te paseas por el saco de boxeo. "
})
sacoboxeo.addEventListener("mousemove", function(ev){
    coordx.value = ev.offsetX
    coordy.value = ev.offsetY
})
