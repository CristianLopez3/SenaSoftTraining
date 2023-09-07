const containers = document.querySelectorAll(".circle-container"); // []
const circles = document.querySelectorAll(".circle");

let circleDragged = null;

circles.forEach((circle) => {
    circle.addEventListener("dragstart", function(event) {
        circleDragged = event.target;
    });
});

containers.forEach((container) => {
    container.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    container.addEventListener("drop", function(event) {
        if (!circleDragged) return;

        // Verificamos si el contenedor ya tiene un input
        const existingCircle = container.querySelector(".circle");

        // Existe
        if(existingCircle){
            const currentValue = parseInt(existingCircle.value)
            const valueToAdd = parseInt(circleDragged.value)

            if(currentValue > valueToAdd){
                container.appendChild(circleDragged);
                circleDragged = null;
            } else {
                alert("No puedes agregar un elemento de valor valor al que ya esta")
            }


        } else{
            container.appendChild(circleDragged);
            circleDragged = null;
        }

    });
});
