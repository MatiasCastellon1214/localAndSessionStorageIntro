/*
if(localStorage.getItem("nombreUsuario" == null)){

    let nombre = prompt("Dinos tu nombre: ");
    document.querySelector(".bienvenida").innerHTML += "Hola " + nombre;

    localStorage.setItem("nombreUsuario", nombre);

} else {
    let nombre = localStorage.getItem("nombreUsuario");
    document.querySelector(".bienvenida").innerHTML += "Hola " + nombre;
}*/

// Si ejecutamos el archivo productos.html, los datos estarán almacenados en el localStorage. 
// Cerramos la ventana, los datos seguirán guardados. Luego veremos con el sessionStorage. 

console.log(localStorage);


// Con sessionStorage se pierden los datos al cerrar la ventana. 

if(sessionStorage.getItem("nombreUsuario" == null)){

    let nombre = prompt("Dinos tu nombre: ");
    document.querySelector(".bienvenida").innerHTML += "Hola " + nombre;

    sessionStorage.setItem("nombreUsuario", nombre);

} else {
    let nombre = sessionStorage.getItem("nombreUsuario");
    document.querySelector(".bienvenida").innerHTML += "Hola " + nombre;
}

console.log(localStorage);
