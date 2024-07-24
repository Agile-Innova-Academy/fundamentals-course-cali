import { getData } from "../modules/getData.js";
import { imgUpload } from "../modules/imgUpload.js";
import { patchData } from "../modules/patchData.js";
import { postData } from "../modules/postData.js";
import { searchHero } from "../modules/searchHero.js";
import { showData } from "../modules/showData.js";

const url = "http://localhost:3000/heroes";
const main = document.getElementById("main");
const createForm = document.getElementById("newHero");
const updateForm = document.getElementById("editHero");

const heroes = await getData(url);
showData(heroes, main)

//SUBIR IMÁGENES Y OBTENER URL
let image = document.getElementById("imageInput")

  image.addEventListener("change", (e) => {
    console.log("Imagen subida")
    const file = e.target.files[0]
    imgUpload(file)
      .then(async (resp) => {
        localStorage.setItem("url_subida", resp);
      })
      .catch((error) => { console.warn(error) });
  })

//AGREGAR HÉROE
createForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let newHero = {
    "id": crypto.randomUUID(),
    "name": document.getElementById("nameInput").value,
    "superhero": document.getElementById("superheroInput").value,
    "publisher": document.getElementById("publisherInput").value,
    "alter_ego": document.getElementById("alterInput").value,
    "first_appearance": document.getElementById("firstInput").value,
    "image": localStorage.getItem("url_subida")
  }

  await postData(url, newHero); 
  createForm.reset();
})

//ACTUALIZAR HÉROE
updateForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let patchingHero = {
    "name": document.getElementById("nameInput2").value,
    "superhero": document.getElementById("superheroInput2").value,
    "publisher": document.getElementById("publisherInput2").value,
    "alter_ego": document.getElementById("alterInput2").value,
    "first_appearance": document.getElementById("firstInput2").value,
    "image": document.getElementById("imageInput2").value,
  }
  await patchData(url, localStorage.getItem("idSelected"), patchingHero);

  updateForm.reset();
})

//BUSCAR HÉROES
const searchValue = document.getElementById("search");

searchValue.addEventListener("input", (e) => {
  const resultados = searchHero(e.target.value, heroes);
  if (resultados.length > 0) {
    showData(resultados, main);
  } else {
    main.innerHTML = "Su busqueda no generó resultados.";
  }
})
