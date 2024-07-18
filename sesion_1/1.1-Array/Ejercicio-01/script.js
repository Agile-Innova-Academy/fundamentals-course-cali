let semana = ['Martes','Miércoles','Jueves','Viernes','Sabado'];

console.log(semana);
//-----------Agregar al array---------------------//
semana.unshift('Lunes');
semana.push('Domingo');
console.log('Se agregarón: ', semana);

// //-----------Eliminar---------------------//
semana.splice(2,1);
//2 es la posición que se desea eliminar
//1 es la cantidad de datos a eliminar
console.log('Se eliminó: ', semana)

// //-----------recorrer---------------------//
semana.forEach((sem, index) =>{
    console.log(sem, index)
    semana.push(sem)
 
})
console.log('Se recorrió y agrego: ',semana)

// //-----------------Búsqueda-----------------------//
let find = semana.find((fi)=> fi === 'Martes')
console.log('Encontre el primer: ', find)

let filter = semana.filter((fi)=> fi === 'Jueves')
console.log('Encontre los siguientes: ', filter)


