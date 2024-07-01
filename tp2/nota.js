  /*   PUNTUACION */
    
    // Variables para las estrellas
    var estrellas = document.querySelectorAll('.estrella');

    // Función para actualizar las estrellas
    function actualizarEstrellas(index) {
        estrellas.forEach(function(estrella, i) {
            if (i < index) {
                estrella.src = 'imagen/EstrellaLlena.png';
            } else {
                estrella.src = 'imagen/Estrella.png';
            }
        });
    }

    // Agregar event listeners a cada estrella
    estrellas.forEach(function(estrella) {
        estrella.addEventListener('click', function() {
            var index = parseInt(estrella.getAttribute('data-index'));
            actualizarEstrellas(index);
        });
    });

    // Función para inicializar las estrellas (opcional, si deseas mantener el estado al recargar)
    function inicializarEstrellas() {
        // Supongamos que guardamos el índice de la última estrella seleccionada en localStorage
        var ultimoIndice = localStorage.getItem('ultimaPuntuacion');
        if (ultimoIndice) {
            actualizarEstrellas(parseInt(ultimoIndice));
        }
    }

    // Guardar la última puntuación en localStorage
    estrellas.forEach(function(estrella) {
        estrella.addEventListener('click', function() {
            var index = parseInt(estrella.getAttribute('data-index'));
            localStorage.setItem('ultimaPuntuacion', index);
        });
    });

    // Inicializar las estrellas al cargar la página
    window.onload = function() {
        inicializarEstrellas();
    };

    // Limpiar el almacenamiento local al salir de la página (opcional)
    window.onunload = function() {
        localStorage.removeItem('ultimaPuntuacion');
    };
   
    /* BOTON LISTA DE SEGUIMIENTO */

    document.addEventListener('DOMContentLoaded', function() {
        var listaSeguimiento = document.getElementById('listadeseguimiento');
        var textoLista = document.getElementById('textodelista');
        var logoLista = document.getElementById('logoLista');
    
        listaSeguimiento.addEventListener('click', function() {
            listaSeguimiento.classList.toggle('active');
            if (listaSeguimiento.classList.contains('active')) {
                textoLista.innerHTML = '<h5>¡SE HA AÑADIDO A LA LISTA CON ÉXITO!</h5><p>Puedes encontrarla en tu lista de seguimiento</p>';
                logoLista.src = 'imagen/tick.png'; // Cambia la imagen
                localStorage.setItem('listaSeguimientoActiva', 'true');
                listaSeguimiento.style.backgroundColor = '#3E3E3E';
            } else {
                textoLista.innerHTML = '<h5>AÑADIR A LA LISTA DE SEGUIMIENTO</h5><p>Añadido por 5mil usuarios</p>';
                logoLista.src = 'imagen/listalogo.png'; // Cambia la imagen de vuelta al logo original
                localStorage.setItem('listaSeguimientoActiva', 'false');
                listaSeguimiento.style.backgroundColor = '#FFA629'; 
            }
        }); 
    
        // Mantener el estado al recargar la página
        var listaSeguimientoActiva = localStorage.getItem('listaSeguimientoActiva');
        if (listaSeguimientoActiva === 'true') {
            listaSeguimiento.classList.add('active');
            textoLista.innerHTML = '<h5>¡SE HA AÑADIDO A LA LISTA CON ÉXITO!</h5><p>Puedes encontrarla en tu lista de seguimiento</p>';
            logoLista.src = 'imagen/tick.png'; // Cambia la imagen
            listaSeguimiento.style.backgroundColor = '#3E3E3E';
        } else {
            listaSeguimiento.classList.remove('active');
            textoLista.innerHTML = '<h5>AÑADIR A LA LISTA DE SEGUIMIENTO</h5><p>Añadido por 5mil usuarios</p>';
            logoLista.src = 'imagen/listalogo.png'; // Cambia la imagen de vuelta al logo original
            listaSeguimiento.style.backgroundColor = '#FFA629'; 
        }
    });

   /*  ENCUESTA */

   document.addEventListener('DOMContentLoaded', function() {
    // Selección de opciones de la encuesta
    var opcionesEncuesta = document.querySelectorAll('.opcionEncuesta');

    opcionesEncuesta.forEach(function(opcion) {
        opcion.addEventListener('click', function() {
            // Cambiar imagen de ellipsevacia.png a ellipsellena.png
            opcion.src = 'imagen/ellipsellena.png';

            // Guardar la opción seleccionada en localStorage
            localStorage.setItem('opcionSeleccionada', opcion.alt);
        });
    });

    // botón "VOTAR"
    var botonVotar = document.querySelector('.botonvotar');
    botonVotar.addEventListener('click', function() {
        // Obtener la opción seleccionada desde localStorage
        var opcionSeleccionada = localStorage.getItem('opcionSeleccionada');

        // Actualizar dinámicamente el contenido de la encuesta
        var encuestaContainer = document.getElementById('encuestaContainer');
        encuestaContainer.innerHTML = `
            <p>¡Gracias por votar! Tendremos en</p>
            <p>cuenta tu opinión para futuros</p>
            <p>artículos.</p>
        `;
    });
});
