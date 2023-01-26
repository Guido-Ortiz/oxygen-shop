function validacion() {
    valor = document.getElementById("email").value;
    if (!((/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(valor)))) {
        alert("Invalid E-mail address");
    }
    elemento = document.getElementById("checkbox");
    if (!elemento.checked) {
        alert('Check terms & conditions')
    }
}