// MODAL
var modal = document.getElementById("ventanaModal");


// Botón que abre el modal
// var boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
// boton.addEventListener("click", function () {
//     modal.style.display = "block";
// });

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click", function () {
    modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

var flag = false;
// console.log(flag)

// Abre el modal luego de un scroll del 25%
document.addEventListener("scroll", () => {
    const scrolledPercentage =
        (scrollContainer().scrollTop /
            (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
        100;

        // console.log(Math.round(scrolledPercentage))

        // console.log(flag)
        if(Math.round(scrolledPercentage) === 25 && flag === false){
            modal.style.display = "block";
            flag = true
        }
});

// Abre el modal luego de 6 seg
function displayModal() { 
    if(flag === false){
        modal.style.display = "block";
        flag = true
        // console.log(flag)
    } 
    // console.log(flag)  
}
setInterval(displayModal, 6000);

