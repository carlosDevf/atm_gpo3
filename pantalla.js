let userdata = {}
const form = document.querySelector("#form_deposito")
document.addEventListener("DOMContentLoaded", function () {    
    const correctUserString = sessionStorage.getItem("correctUser");    
    const correctUser = JSON.parse(correctUserString);
    userdata = correctUser;    
    console.log(correctUser)    
});

// que el evento submit es unico para el form
form.addEventListener("submit", function(e){
    // mandar datos a un servidor => 
    e.preventDefault() // previene mandar el datos al servidor 
    const dataform = new FormData(form) // clase => metods y propiedes // arreglo de elementos de un form html input
    const { deposito, fondo, lista } = Object.fromEntries(dataform) // iterar los elementos que estan en el form
    // console.log(objetodeform.cantidad_deposito)    
    // console.log(fondo, 'aca esta el fondo')
    // console.log(lista, 'aca esta el fondo')
    // document.body.style = `background-color: ${fondo}`
    userdata.saldo = Number(userdata.saldo) + Number(deposito)    
    sessionStorage.setItem("correctUser", JSON.stringify(userdata))
    window.location.href = "./atm.html"
})

