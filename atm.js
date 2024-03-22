// DOMContentLoaded para esperar que todo el Dom ya este cargado
// ejercicio con SORT
// ver algo git => edu.devf.la
//
const botondeposito = document.querySelector("#depositos");
const modal = document.querySelector("#modal");
const botonSaldos = document.querySelector("#saldo")
const cerrarModalSaldos = document.querySelector("#modal button")
const fondoDeModal = document.querySelector("#backdrop")
console.log(fondoDeModal, 'boton de cerrar')
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

function conmutarClase(elementohtml, clase){
    elementohtml.classList.toggle(clase)
}

const h5delSaldoDelModal = document.createElement("h5")
botonSaldos.addEventListener('click', function(){
    // modal.style = "display: block" 
    fondoDeModal.style = "display: block"
    conmutarClase(modal, "close_modal")
    h5delSaldoDelModal.innerHTML = `
    <div>
        <h5 style="font-size: 2rem">${userdata.saldo}</h5>
    </div>
    `
    modal.appendChild(h5delSaldoDelModal)
})

cerrarModalSaldos.addEventListener('click', function(){
    conmutarClase(modal, 'close_modal')
    fondoDeModal.style = "display: none"
    // modal.removeChild(h5)
})

fondoDeModal.addEventListener('click', function(){
    // cambiar la propiedad de display para que se vea en el html
    fondoDeModal.style = "display: block"
    // cambiamos la clase que muestra el
    conmutarClase(modal, 'close_modal')
    fondoDeModal.style = "display: none"
})