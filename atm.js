// DOMContentLoaded para esperar que todo el Dom ya este cargado
// ejercicio con SORT
// ver algo git => edu.devf.la
//
const botondeposito = document.querySelector("#depositos");
const modal = document.querySelector("#modal");
// variable global // inicializar tus variables con el tipo de dato que va a tener
// {nombre: 'Carlos', cuenta: 123456, password: '123', saldo: '100', currency: 'MXN'}
let userdata = {};

document.addEventListener("DOMContentLoaded", function () {
  // SCOPE de la funcion o entorno o de ejecuccion
  // vamos por el valor que esta en session => como lo guarda en string
  const correctUserString = sessionStorage.getItem("correctUser");
  // aqui parseamos (cambiamos) el string de la linea 5 a un objeto como en el del index
  const correctUser = JSON.parse(correctUserString);

  // rutas protegidas
  if (!correctUser) window.location.href = "/index.html";

  userdata = correctUser;
  // buscamos donde esta el saludo
  const saludoTag = document.querySelector("#saludo_usuario");
  // cambiamos el html del tag de saludo a un nuevo elemento HTML
  saludoTag.outerHTML = `<h1>Bienvenido ${correctUser.nombre}</h1>`;
});

botondeposito.addEventListener("click", function () {
    window.location.href = "/pantalla.html";
});
