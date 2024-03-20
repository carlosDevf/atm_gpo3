// => crear nuestra base de datos
const banco = [
    {
        nombre: "Carlos",
        cuenta: 123456,
        password: "123",
        saldo: "100",
        currency: "MXN",
    }, // para separar elementos de un array o un objeto // 0
    {
        nombre: "Fernando",
        cuenta: 7891011,
        password: "123",
        saldo: "200",
        currency: "USD",
    } // index 1
]; // terminar el elemento que acabo de escribir en JS es opcional.

// => capturar el input de la cuenta
// query selector ocupa una sintaxis de clases
const cuenta = document.querySelector("#login_cuenta")
// => campturar el input del password
const password = document.querySelector("#password")
// => comprobar que sea la combinacion correcta
    //=>evitar que se envien los datos al servidor

// traemos el boton o el elemento con el que el usuario va a interactuar
const buttonLogin = document.querySelector("button")
// document.addEventListener("button")
// function(){}
// con el addEventListener del boton voy a escuar el evento click que es cuando le dan click boton
buttonLogin.addEventListener("click", function(e){
    // evitar que se mande al servidor
    e.preventDefault()
    const currentCuenta = cuenta.value
    const currentPassword = password.value
    let correctUser = null
    //for para buscar que la combinacion sea la correcta   
    //incialiazdor    ///cuando va a parar  ///como va avanzar
    for (let i = 0; i < banco.length; i++) {
        //0 => 1
        const usuarioBb = banco[i] // interando con esta sintaxis tomamos el valor de cada elemento del arreglo
        console.log({ currentCuenta, currentPassword, usuarioBb })
        // Number y parseInt => no le importa que tengas letras
        if (usuarioBb.cuenta === Number(currentCuenta) && usuarioBb.password === currentPassword) {            
            correctUser = usuarioBb
            break
        }        
    }

    console.log(correctUser, "Si lo encontramos")
    // operador de la contradiccion
    if (!correctUser) {
        // => le mandamos mensaje de error
        alert("Alto ahi ampon!")        
    } else  {
        // mandarlo al otro HTML // guardar este usuario
        // => si es correcta lo dejamos pasar
        // => guardar el login // localstorage // sesionStorage propio de los navegadores o cliente
        // window.localStorage()
        // localStorage va a guardar el dato hasta que borren cheche        
        sessionStorage.setItem("correctUser", JSON.stringify(correctUser))
        // => redirect a unaa pagina 
        /* window.location.href = "https://google.com" */
        window.location.href = "/atm.html"
    }
    //for, while
})

