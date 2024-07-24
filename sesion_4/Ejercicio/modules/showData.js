export const showData = async (fetchedData, container) => {
  container.innerHTML = ""
  fetchedData.forEach((element, index) => {
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
        <button id="${id}" class="edit-btn">Editar</button>
        <button id="${id}" class="delete-btn">Eliminar</button>
      </div>
    `

    const favDialog = document.getElementById("favDialog");
    const cancelButton = document.getElementById("cancel");
    const editButton = div.querySelector(".edit-btn")
  
    editButton.addEventListener("click", function (e) {
      localStorage.setItem("idSelected", e.target.id);
      favDialog.showModal();
      const nameInput2 = document.getElementById("nameInput2");
      const superheroInput2 = document.getElementById("superheroInput2");
      const publisherInput2 = document.getElementById("publisherInput2");
      const alterInput2 = document.getElementById("alterInput2");
      const firstInput2 = document.getElementById("firstInput2");
      const imageInput2 = document.getElementById("imageInput2");

      const heroData = fetchedData.find((hero) => hero.id === e.target.id);
      nameInput2.value = heroData.name;
      superheroInput2.value = heroData.superhero;
      publisherInput2.value = heroData.publisher;
      alterInput2.value = heroData.alter_ego;
      firstInput2.value = heroData.first_appearance;
      imageInput2.value = heroData.image;
    });

    cancelButton.addEventListener("click", function () {
      favDialog.close();
    });

    container.appendChild(div);
  });
}