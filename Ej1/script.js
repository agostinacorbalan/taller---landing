//variables
var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_videojuego = document.getElementById("videojuego");
var input_plataforma = document.getElementById("plataforma");
var input_submit = document.getElementById("boton-enviar");

// Función para verificar si todos los campos están llenos
function verificarCampos() {
  if (input_nombre.value && input_email.value && input_videojuego.value && input_plataforma.value) {
      input_submit.disabled = false;
      input_submit.classList.remove('disabled');
      input_submit.classList.add('active');
  } else {
      input_submit.disabled = true;
      input_submit.classList.remove('active');
      input_submit.classList.add('disabled');
  }
}

// Agregar eventos de entrada a los campos
[input_nombre, input_email, input_videojuego, input_plataforma].forEach(function(element) {
    element.addEventListener('input', verificarCampos);
});


function enviarFormulario(event){
    event.preventDefault();
     // Simular envío de formulario y mostrar feedback
     var valor_nombre = input_nombre.value;
     var valor_email = input_email.value;
     
     var placeholder_nombre = document.getElementById("nombre-placeholder");
     var placeholder_email = document.getElementById("email-placeholder");

     placeholder_nombre.innerHTML = valor_nombre;
     placeholder_email.innerHTML = valor_email;
     
     // Mostrar feedback
     var elemento_feedback = document.getElementById("feedback");
     elemento_feedback.classList.remove("oculto");

     // Ocultar formulario
     var elemento_formulario = document.getElementById("formulario");
     elemento_formulario.classList.add("oculto");
 }

// Agregar evento de envío al formulario
input_submit.addEventListener("click", enviarFormulario);

// Guardar el valor del input en localStorage cuando se cambia
document.getElementById('email').addEventListener('input', function() {
 localStorage.setItem('email', this.value);
});

// Limpiar el valor del input al cargar la página
window.onload = function() {
 var storedEmail = localStorage.getItem('email');
 if (storedEmail) {
     document.getElementById('email').value = storedEmail;
 }
 verificarCampos();
};

// Limpiar el valor del input al cambiar de página
window.onunload = function() {
 localStorage.removeItem('email');
};
  