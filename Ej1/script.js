console.log("");

//variables
var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_informacion = document.getElementById("informacion");
var input_submit = document.getElementById("boton-enviar");

console.log("input_nombre");
console.log("input_email");

input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event){
    event.preventDefault();
    console.log("Clickeado");
    console.log("!");

 var valor_nombre = input_nombre.value;
 var valor_email = input_email.value;
 var valor_informacion = input_informacion.value;

 console.log(valor_nombre);
 console.log(valor_email);
 console.log(valor_informacion);

 var placeholder_nombre = document.getElementById("nombre-placeholder");
 var placeholder_email= document.getElementById("email-placeholder");

 placeholder_nombre.innerHTML = valor_nombre;
 placeholder_email.innerHTML = valor_email;
 
 //Mostrar feedback
 elemento_feedback = document.getElementById("feedback");
 elemento_feedback.classList.remove("oculto");

 //Ocultar form
 elemento_formulario = document.getElementById("formulario");
 elemento_formulario.classList.add("oculto");
}
 
// Guardar el valor del input en localStorage cuando se cambia
document.getElementById('email').addEventListener('input', function() {
    localStorage.setItem('email', this.value);
  });
  
  // Limpiar el valor del input al cargar la página
  window.onload = function() {
    // Obtener el valor almacenado en localStorage
    var storedEmail = localStorage.getItem('email');
    
    // Verificar si hay un valor almacenado
    if (storedEmail) {
      // Asignar el valor almacenado al input
      document.getElementById('email').value = storedEmail;
    }
  };
  
  // Limpiar el valor del input al cambiar de página
  window.onunload = function() {
    localStorage.removeItem('email');
  };
  