
function primero(callback) {

    setTimeout(() => {
         console.log("primero"); 
          callback();        
    }, 3000);
 
}

function segundo() {
    setTimeout(() => {
         console.log("segundo");
    }, 1000);     

}

primero(segundo)



//------------------callback--------------//

function Mostrarmensaje() {
    console.log("Han pasado 2 seg")
}
setTimeout(Mostrarmensaje, 2000);


////---------Saludar------------------//

function saludar(nombre) {
        console.log(`Hola, ${nombre}`);

}

function EntradaUsuario(callback) {
    const nombre = prompt("Ingrese tu nombre")
    callback(nombre)
}

//llamar a la funcion
EntradaUsuario(saludar)
