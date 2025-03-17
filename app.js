document.addEventListener('DOMContentLoaded', function() {
    const siBtn = document.getElementById('siBtn');
    const noBtn = document.getElementById('noBtn');
    const cartel = document.getElementById('cartel');
    const botones = document.getElementById('botones');
    const mensaje = document.getElementById('mensaje');
    
    // Fondo con corazones
    const fondoCorazones = document.createElement('div');
    fondoCorazones.id = 'fondoCorazones';
    document.body.appendChild(fondoCorazones);

    // Función cuando se hace click en el botón de 'sí'
    siBtn.addEventListener('click', function() {
        cartel.style.display = 'none';  // Ocultar la pregunta
        botones.style.display = 'none';  // Ocultar los botones
        fondoCorazones.style.display = 'block';  // Mostrar el fondo con corazones
        mensaje.innerHTML = '<button id="heartButton">Somos novias, te amo toda</button>';

        const heartButton = document.getElementById('heartButton');
        heartButton.addEventListener('click', function() {
            alert('¡Te amo mucho! 💖');
        });
    });

    // Función cuando se hace click en el botón de 'no'
    noBtn.addEventListener('click', function() {
        cartel.style.display = 'none';  // Ocultar la pregunta
        botones.style.display = 'none';  // Ocultar los botones
        fondoCorazones.style.display = 'none';  // Ocultar fondo de corazones
        mensaje.innerHTML = '<button id="noButton">Bueno, morite</button>';

        const noButton = document.getElementById('noButton');
        noButton.addEventListener('click', function() {
            alert('¡Jajaja! 😜');
        });
    });
});

