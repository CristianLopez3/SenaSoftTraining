// Función para ordenar aleatoriamente un array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Obtener los divs hijos y convertirlos en un array
const comienzoDiv = document.querySelector('.comienzo');
const columnDivs = Array.from(comienzoDiv.querySelectorAll('.column'));

// Ordenar aleatoriamente los divs
shuffleArray(columnDivs);

// Reemplazar los divs hijos en el orden aleatorio
columnDivs.forEach((div) => {
    comienzoDiv.appendChild(div);
});

// Obtener la lista de botones
const botones = document.querySelectorAll('button');

// Inicializar las posiciones de destino para cada botón
const posicionesDestino = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Agregar controladores de eventos para el arrastre de los botones
botones.forEach(function(boton) {
    boton.draggable = true;
    boton.addEventListener('dragstart', handleDragStart);
    boton.addEventListener('dragover', handleDragOver);
    boton.addEventListener('drop', handleDrop);
});

// Función para manejar el inicio del arrastre
function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

// Función para manejar el evento "dragover" (mientras se arrastra sobre un elemento)
function handleDragOver(event) {
    event.preventDefault();
}

// Función para manejar el evento "drop" (cuando se suelta el botón)
function handleDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const botonArrastrado = document.getElementById(data);

    // Obtener la posición actual del botón
    const posicionActual = posicionesDestino.indexOf(Number(botonArrastrado.dataset.valor));

    // Obtener la posición del botón de destino
    const posicionDestino = posicionesDestino.indexOf(Number(event.target.dataset.valor));

    // Intercambiar los valores en el array de posiciones de destino
    [posicionesDestino[posicionActual], posicionesDestino[posicionDestino]] = [posicionesDestino[posicionDestino], posicionesDestino[posicionActual]];

    // Reorganizar los botones en la vista
    comienzoDiv.replaceChild(event.target.parentNode, botonArrastrado.parentNode);

    // Verificar si el rompecabezas está resuelto
    if (posicionesDestino.every((valor, indice) => valor === indice + 1)) {
        alert('¡Has resuelto el rompecabezas!');
    }
}
