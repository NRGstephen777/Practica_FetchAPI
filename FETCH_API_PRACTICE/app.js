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

fetch("http://localhost:3000/contactos", {
    method: "POST",                              // Método HTTP
    headers: {
        "Content-Type": "application/json",      // Indicar que enviamos JSON
    },
    body: JSON.stringify({ nombre: "...", telefono: "..." })  // Los datos
});



const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let nombre = document.getElementById("nombre").value;
    console.log(nombre)
    
    let telefono = document.getElementById("telefono").value;
    console.log(telefono)

    fetch("http://localhost:3000/contactos", {
        method: "POST",                              // Método HTTP
        headers: {
            "Content-Type": "application/json",      // Indicar que enviamos JSON
        },
        body: JSON.stringify( 
            { 
            nombre: nombre, 
            telefono: telefono,
            }
        )  // Los datos
    })

    .then(response => response.json())
    .then((data) =>
        mostrarDatos()
    )

});


