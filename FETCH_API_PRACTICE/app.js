function mostrarDatos(){
    fetch(" http://localhost:3000/contactos")
    .then((response) => response.json())

    .then((data)=>{
        data.data.forEach(element => {
            let tr = document.createElement("tr")
            
            tr.innerHTML=`<td>${element["id"]}</td> <td>${element["nombre"]}</td> 
            <td>${element["telefono"]}</td> <td> Ninguno </td> 
            <button class = "btn btn-sm btn-danger" id="delete-btn" >Eliminar</button>`
            
            let tbody = document.getElementById("tablaContactos");
            console.log(tbody)
            tbody.appendChild(tr) 
        });
        
        let btn = document.getElementById("delete-btn");
        console.log(btn)
        btn.addEventListener("click",()=>{
        eliminarContacto(contacto.id)
    })

    })

}


function eliminarContacto(id){
    fetch(`http://localhost:3000/contactos/${id}`, {
    method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })

    .then((data)=>{
        alert("The contact was deleted")
    })

    mostrarDatos();
}

mostrarDatos();