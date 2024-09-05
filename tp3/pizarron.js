// Variables para llevar un seguimiento de los instrumentos seleccionados
let selectedInstruments = [];

// Función para manejar la selección/deselección de instrumentos
function toggleInstrument(instrument) {
    const button = document.getElementById(instrument + 'Button');
    const index = selectedInstruments.indexOf(instrument);

    if (index > -1) {
        selectedInstruments.splice(index, 1); // Deseleccionar si ya estaba seleccionado
        button.classList.remove('selected');
    } else {
        selectedInstruments.push(instrument); // Seleccionar
        button.classList.add('selected');
    }

    // Habilitar/deshabilitar el botón de generar canción según la selección
    document.getElementById('generateButton').disabled = selectedInstruments.length < 2;
}

// Función para generar la canción
function generateSong() {
    let songUrl = '';

    // Determinar la canción a reproducir en función de los instrumentos seleccionados
    if (selectedInstruments.includes('guitarra') && selectedInstruments.includes('tambor') && selectedInstruments.includes('trompeta')) {
        songUrl = 'sonido/todos.mp3';
    } else if (selectedInstruments.includes('guitarra') && selectedInstruments.includes('tambor')) {
        songUrl = 'sonido/guitarra-tambor.mp3';
    } else if (selectedInstruments.includes('guitarra') && selectedInstruments.includes('trompeta')) {
        songUrl = 'sonido/guitarra-trompeta.mp3';
    } else if (selectedInstruments.includes('tambor') && selectedInstruments.includes('trompeta')) {
        songUrl = 'sonido/trompeta-tambor.mp3';
    }

    // Reproducir la canción seleccionada
    const songPlayer = document.getElementById('songPlayer');
    songPlayer.src = songUrl;
    songPlayer.style.display = 'block';
    songPlayer.play();

    // Ocultar los botones de instrumentos
    document.getElementById('instrumentButtons').classList.add('hidden');

     // Ocultar el botón de "Generar Canción"
     document.getElementById('generateButton').style.display = 'none';

    // Mostrar el botón de volver a generar
    document.getElementById('regenerateButton').style.display = 'block';
}

// Función para resetear la selección y volver a generar la canción
function resetSelection() {
    selectedInstruments = [];
    document.getElementById('generateButton').disabled = true;
    document.getElementById('songPlayer').style.display = 'none';
    document.getElementById('regenerateButton').style.display = 'none';

     // Mostrar los botones de instrumentos
     document.getElementById('instrumentButtons').classList.remove('hidden'); // Aquí vuelves a mostrar los botones de instrumentos

      // Mostrar el botón de "Generar Canción" nuevamente
    document.getElementById('generateButton').style.display = 'inline-block';

    // Resetear los botones de selección
    document.getElementById('guitarraButton').classList.remove('selected');
    document.getElementById('tamborButton').classList.remove('selected');
    document.getElementById('trompetaButton').classList.remove('selected');
}
