//const response  = require("express");

let thead = ["id","nombre","telefono"]

fetch("http://localhost:3000/contactos")
    .then((response) => response.json()) //Convertir la respuesta a json
    .then((data)=>{
        //aqui ya tienes los datos del servidor
        console.log(data);
    })

function mostrarContactos(){
    
    fetch("http://localhost:3000/contactos")
    .then((response) => response.json())
    
    .then((data) =>{
        console.log(data.data)
        
        let tbody = document.getElementById("tablaContactos")
        tbody.innerHTML=""
        
        data.data.forEach(element => {
            console.log("\nElement = "+element)
            let tr = document.createElement("tr"); //Creo el elemento
            //Integro el contenido que quiero al tag que quiero
            tr.innerHTML= `<td>${element.id}</td><td>${element.nombre}</td><td>${element.telefono}</td><td>Ninguno</td>`;
            tbody.appendChild(tr)   
        });
    })
}

mostrarContactos();
