import { showPokemon } from "./show.js";

// decirle a la funcion que vamos a trabajar una promesa - Async
export const getPokemon = async (url) => {
  console.log("estoy en get", url);
// controlar la respuesta si se cumple o no 
// .then y .catch o try y catch
try{
  const respuesta = await fetch(url);
   console.log(respuesta);
  const data =  await respuesta.json();
  console.log("lo que converti en un json es: ",data);
  showPokemon(data);
}
catch(error) {
     console.error("Existe un error", error)
}

};
