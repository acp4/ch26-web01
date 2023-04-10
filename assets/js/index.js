console.log("sesion web1");
function changeGreeting(){
     // obtener nombre cliente
     const clientName = getnameOfClient();
     // obenter referencia del label h1
     const greetingReference = getReferenceOfIdGreeting();

     // cambiar el saludo
     greetingReference.innerHTML = "Hola " + clientName;
}

function getnameOfClient(){
    const clientName = prompt("Escribe tu nombre");
    return clientName;

}

function getReferenceOfIdGreeting(){
    return document.getElementById("greeting");
}