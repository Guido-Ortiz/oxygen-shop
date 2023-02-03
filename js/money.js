function selectOption() {
    var seleccion = document.getElementById("select")
    if(seleccion.value === 'euros'){
        document.getElementById('text1').innerHTML = '€ 0'
        document.getElementById('text2').innerHTML = '€ 23'
        document.getElementById('text3').innerHTML = '€ 55'
    }
    if(seleccion.value === 'dolars' || seleccion.value === null){
        document.getElementById('text1').innerHTML = '$ 0'
        document.getElementById('text2').innerHTML = '$ 25'
        document.getElementById('text3').innerHTML = '$ 60'
    }
    if(seleccion.value === 'pounds'){
        document.getElementById('text1').innerHTML = '£ 0'
        document.getElementById('text2').innerHTML = '£ 20'
        document.getElementById('text3').innerHTML = '£ 49'
    }
}

// document.getElementById("pricing").value = "euros";
// var change = document.getElementById("pricing");
// change.addEventListener("change", function() {
//     // console.log(slcchange.value)

//     if(seleccion.value === 'euros'){
//         document.getElementById('text1').innerHTML = '€ 0'
//         document.getElementById('text2').innerHTML = '€ 23'
//         document.getElementById('text3').innerHTML = '€ 55'
//     }
//     if(seleccion.value === 'dolars' || seleccion.value === null){
//         document.getElementById('text1').innerHTML = '$ 0'
//         document.getElementById('text2').innerHTML = '$ 25'
//         document.getElementById('text3').innerHTML = '$ 60'
//     }
//     if(seleccion.value === 'pounds'){
//         document.getElementById('text1').innerHTML = '£ 0'
//         document.getElementById('text2').innerHTML = '£ 20'
//         document.getElementById('text3').innerHTML = '£ 49'
//     }
// });