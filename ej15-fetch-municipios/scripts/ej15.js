const selectProvincias = document.querySelector("#provincias")
const selectMunicipios = document.querySelector("#municipios")

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

selectProvincias.addEventListener("change",function(ev){
    //primero vaciamos el SELECT municipios
    selectMunicipios.innerHTML = '<option value="0">(Elige municipio)</option>'

    let codProvElegida = this.value

    const params = new URLSearchParams("provincia="+codProvElegida) //provincia=04
    const options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: params // body data type must match "Content-Type" header
    }
    fetch("server/cargaMunicipiosXML.php",options)
    .then(resp => resp.text())
    .then(textoCrudoXML => {
        let parser = new DOMParser()
        let xml = parser.parseFromString(textoCrudoXML,"text/xml")
        //recuperar los municipios del árbol "xml"
        let municipios = xml.querySelectorAll("municipio")
        municipios.forEach(municipio => {
             let codigo = municipio.children[0].textContent
             let nombre = municipio.children[1].textContent
             let newOption = document.createElement("OPTION")
             newOption.value = codigo
             newOption.textContent = nombre
             selectMunicipios.append(newOption)
        })
    })
})