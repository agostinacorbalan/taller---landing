// Funciones y variables para el formulario
var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_contraseña = document.getElementById("contraseña");
var input_repetir = document.getElementById("repetir");
var input_submit = document.getElementById("boton-enviar");

function verificarCampos() {
  if (input_nombre.value && input_email.value && input_contraseña.value && input_repetir.value) {
      input_submit.disabled = false;
      input_submit.classList.remove('disabled');
      input_submit.classList.add('active');
  } else {
      input_submit.disabled = true;
      input_submit.classList.remove('active');
      input_submit.classList.add('disabled');
  }
}

[input_nombre, input_email, input_contraseña, input_repetir].forEach(function(element) {
    element.addEventListener('input', verificarCampos);
});

input_submit.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = 'onboarding.html';
});

document.getElementById('email').addEventListener('input', function() {
 localStorage.setItem('email', this.value);
});

window.onload = function() {
 var storedEmail = localStorage.getItem('email');
 if (storedEmail) {
     document.getElementById('email').value = storedEmail;
 }
 verificarCampos();
};

window.onunload = function() {
 localStorage.removeItem('email');
};