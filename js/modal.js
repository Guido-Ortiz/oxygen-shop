// MODAL
var modal = document.getElementById("ventanaModal");

var span = document.getElementsByClassName("cerrar")[0];

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

const modalActive = true
setTimeout(()=>{
    if(sessionStorage.getItem('modalActive')!== '1'){
        modal.style.display = "block";
        sessionStorage.setItem('modalActive','1')
    }
}, 6000)

const showModal = () =>{
modalActive = false
}
document.addEventListener("ev",showModal)
document.addEventListener("scroll", ()=> {
    if (sessionStorage.getItem("modalActive") !== "1" && (scrollY/(document.body.offsetHeight - innerHeight))*100 >= 25) {
    modal.style.display = "block";
    sessionStorage.setItem("modalActive", "1");
    }
})