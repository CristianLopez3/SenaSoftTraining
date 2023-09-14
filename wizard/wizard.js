const buttons = document.querySelectorAll("button.anterior, button.siguiente");

// Capturamos los elementos
const numero = document.getElementById("num2");
const step1 = document.getElementById("section1");
const step2 = document.getElementById("section2");
const step3 = document.getElementById("section3");
const step4 = document.getElementById("section4");




function stepOne() {
    numero.classList.add("active");
    step1.classList.remove("active");
    step2.classList.add("active");
}

function stepOneNext() {
    numero.classList.remove("active");
    step1.classList.add("active");
    step2.classList.remove("active");
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (button.classList.contains("anterior")) {
            stepOne();
            // Si es el botón "Volver", ejecuta stepOneNext()
        } else if (button.classList.contains("siguiente")) {
            stepOneNext();
            // Si es el botón "Siguiente", ejecuta stepOne()
        }
    });
});
