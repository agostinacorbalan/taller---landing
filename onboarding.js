document.addEventListener('DOMContentLoaded', function() {
    const opciones = document.querySelectorAll('.opcion');
    const botonProximo = document.getElementById('boton-proximo');
    const feedback = document.getElementById('feedback');

    opciones.forEach(opcion => {
        opcion.addEventListener('click', function() {
            this.classList.toggle('seleccionado');
            verificarSeleccion();
        });
    });

    function verificarSeleccion() {
        const seleccionadas = document.querySelectorAll('.opcion.seleccionado');
        if (seleccionadas.length > 0) {
            botonProximo.disabled = false;
            botonProximo.classList.add('active');
        } else {
            botonProximo.disabled = true;
            botonProximo.classList.remove('active');
        }
    }

    botonProximo.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del botón
        if (this.classList.contains('active')) {
            feedback.classList.remove('oculto');
        }
    });

    // Verificar campos al cargar la página
    verificarSeleccion();
});
