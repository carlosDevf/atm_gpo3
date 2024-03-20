// DOMContentLoaded para esperar que todo el Dom ya este cargado
document.addEventListener("DOMContentLoaded", function(){
    
    // vamos por el valor que esta en session => como lo guarda en string
    const correctUserString = sessionStorage.getItem("correctUser")
    // aqui parseamos (cambiamos) el string de la linea 5 a un objeto como en el del index    
    const correctUser = JSON.parse(correctUserString)

    // rutas protegidas
    if (!correctUser) window.location.href = "/index.html"

    // buscamos donde esta el saludo
    const saludoTag = document.querySelector("#saludo_usuario")
    // cambiamos el html del tag de saludo a un nuevo elemento HTML
    saludoTag.outerHTML = `<h1>Bienvenido ${correctUser.nombre}</h1>`
    console.log({ correctUser })
})