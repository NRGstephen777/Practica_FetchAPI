function mostrarDatos(){
    fetch(" http://localhost:3000/contactos")
    .then((response) => response.json())
    .then((data)=>{
        data.data.forEach(element => {
            let tr = document.createElement("tr")
            console.log(element["nombre"])
            
            tr.innerHTML=`<td>${element["id"]}</td> <td>${element["nombre"]}</td> <td>${element["telefono"]}</td> <td>Ninguno</trd>`
            
            let tbody = document.getElementById("tablaContactos");
            console.log(tbody)
            
            tbody.appendChild(tr) 
        });
    })
}

mostrarDatos()