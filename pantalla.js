let userdata = {}
const form = document.querySelector("#form_deposito")
console.log(form)

document.addEventListener("DOMContentLoaded", function () {    
    const correctUserString = sessionStorage.getItem("correctUser");    
    const correctUser = JSON.parse(correctUserString);
    userdata = correctUser;    
    console.log(correctUser)    
});

form.addEventListener("submit", function(e){
    e.preventDefault()
    const dataform = new FormData(form)
    const { cantidad_deposito } = Object.fromEntries(dataform)
    console.log(cantidad_deposito)
})

