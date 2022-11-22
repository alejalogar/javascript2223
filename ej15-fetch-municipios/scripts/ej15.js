const selectProvincias = document.querySelector("#provincias")

fetch("server/cargaProvinciasXML.php")
.then(respuestaCruda => {
    return respuestaCruda.text()
}).then(textoXML => 
    {
        console.log("textoXML = " + textoXML)
        let parser = new DOMParser()
        let xmlDoc = parser.parseFromString(textoXML,"text/xml")
        let provincias = xmlDoc.querySelectorAll("provincia")
        provincias.forEach(provincia => {
             let codigo = provincia.children[0].textContent
             let nombre = provincia.children[1].textContent
             // equivalente a:
             //let nombre = provincia.querySelector("nombre").textContent
             let newOption = document.createElement("OPTION")
             newOption.value = codigo
             newOption.textContent = nombre
             selectProvincias.append(newOption)
        })
    }
)
