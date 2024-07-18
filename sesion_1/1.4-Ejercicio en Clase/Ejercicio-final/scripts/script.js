// declaración de variables y constantes

const profileForm = document.getElementById("profileForm");
const containercard = document.getElementById("profileContainer");

let profile = JSON.parse(localStorage.getItem("profile")) || [];
// Capturar la información del perfil - formulario -submit
profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("nameInput").value;
  const user = document.getElementById("usernameInput").value;
  const bio = document.getElementById("bioInput").value;

  profile.push({ name, user, bio });

  localStorage.setItem("profile", JSON.stringify(profile));

  profileForm.reset();
  displayProfiles();
});

//--------------Listar el contenido del LocalStorage----------------------------//
function displayProfiles() {
  profile.forEach((element) => {
    console.log(element);
    let card = document.createElement("div");
    card.className = "card";

    let cardName = document.createElement("h3");
    cardName.textContent = element.name;
    let cardUser = document.createElement("h5");
    cardUser.textContent = "@" + element.user;
    let cardBio = document.createElement("p");
    cardBio.textContent = element.bio;

    card.appendChild(cardName);
    card.appendChild(cardUser);
    card.appendChild(cardBio);

    containercard.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", displayProfiles);

//-------------Busqueda------------------------//
const searchProfile = () => {
  const searchInput = document.getElementById("searchInput").value;

  // filtros  find // suponiendo que el nombre de usuario sea único

  const findProfile = profile.find((pro) => pro.user.includes(searchInput));
  containercard.innerHTML = "";

  let card = document.createElement("div");
  card.className = "card";

  let cardName = document.createElement("h3");
  cardName.textContent = findProfile.name;
  let cardUser = document.createElement("h5");
  cardUser.textContent = "@" + findProfile.user;
  let cardBio = document.createElement("p");
  cardBio.textContent = findProfile.bio;

  card.appendChild(cardName);
  card.appendChild(cardUser);
  card.appendChild(cardBio);

  containercard.appendChild(card);
};
