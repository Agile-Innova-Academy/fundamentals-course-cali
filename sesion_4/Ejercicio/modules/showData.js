export const showData = (fetchedData, container) => {
    container.innerHTML = ""
    fetchedData.forEach((element) => {
      let { id, alter_ego, first_appearance, image, name, superhero } = element
      const div = document.createElement("div")
      div.classList.add("hero")
      div.setAttribute('id', id)
      div.innerHTML = `
      <img src="${image}" />
      <div class="hero-info">
        <h3>${superhero}</h3>
        <span>${first_appearance}</span>
      </div>
      <div class="overview">
        <span>${alter_ego}</span>
        <button id="${id}">Editar</button>
        <button id="${id}">Eliminar</button>
      </div>
    `

      //PENDIENTE REALIZAR FUNCIÓN PARA EDITAR, Y ELIMINAR
      
    container.appendChild(div);
    });
}