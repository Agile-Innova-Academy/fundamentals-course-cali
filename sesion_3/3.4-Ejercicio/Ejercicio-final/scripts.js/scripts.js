import { api_url } from "./constant.js";
import { getPokemon } from "./get.js";


// leer lo trae la api y asi poder pintarla
// getPokemon(api_url);

  for (let i = 0; i < 20; i++) {
    console.log(api_url+i);
     getPokemon(api_url+i);
  }


