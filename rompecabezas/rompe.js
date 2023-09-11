 // Función para ordenar aleatoriamente un array de datos
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Obtener los divs hijos de comienzo que es el que tiene todo desornedado y convertirlos en un array
const comienzoDiv = document.querySelector('.comienzo');
const columnDivs = Array.from(comienzoDiv.querySelectorAll('.column'));

// Ordenar aleatoriamente los divs
shuffleArray(columnDivs);





// Reemplazar los divs hijos en el orden aleatorio
columnDivs.forEach((div) => {
    comienzoDiv.appendChild(div);
});

let botonSeleccionado = null;
// seleccionamos el div de la solucion del rompecabezas
const final = document.querySelector(".final");
final.addEventListener("dragover", function(e){
    e.preventDefault();
  })
// seleccionamos las columnas hijas abajo de este de este
let columnas = Array.from(final.querySelectorAll(".column-final"));



// hacemos que los botones sean draggeables
const botones = document.querySelectorAll('button');
botones.forEach(function(boton) {
  boton.draggable = true;

  boton.addEventListener("dragstart", function(event) {
    botonSeleccionado = event.target;
    // imprimir el valor en consola para verificar si es el boton esperado
    console.log("seleccionaste "+boton.dataset.valor) // funciona 
  });

  final.addEventListener("dragover", function(e){
    
    columnas.forEach((columna) => {
        let valorSeleccionado = parseInt(botonSeleccionado.dataset.valor)
        let valorEsperado  = parseInt(columna.dataset.valor);

        if(valorSeleccionado == valorEsperado){
            columna.addEventListener(("drop"), function(e){
                columna.appendChild(botonSeleccionado);
            })
        }

    })


  })




  






}); 




