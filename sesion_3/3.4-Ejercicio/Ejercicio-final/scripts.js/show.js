const main = document.getElementById("main");
export const showPokemon = (datos) => {
  console.log(datos);
  //desestructurar
  const { id, order, name, types, base_experience, sprites } = datos;

  console.log(id, order, name, types, base_experience, sprites);

  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon");

  pokemonCard.innerHTML = `
        <img src=${sprites.front_default}>
    <div class="pokemon-info">
        <h2>${name}</h2>
            <span class="green">${base_experience}</span>
    </div>
    <div class="overview">
    <h3>${types[0].type.name}</h3>
    </div>
  `;

  main.appendChild(pokemonCard);
};
