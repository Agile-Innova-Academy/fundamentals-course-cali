import { getData } from "../modules/getData.js";
import { postData } from "../modules/postData.js";
import { showData } from "../modules/showData.js";

const url = "http://localhost:3000/heroes";
const main = document.getElementById("main");
const form = document.getElementById("newHero");

const heroes = await getData(url);
showData(heroes, main)

//AGREGAR HÉROE
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let newHero =  {
    "id": crypto.randomUUID(),
    "name": document.getElementById("nameInput").value,
    "superhero": document.getElementById("superheroInput").value,
    "publisher": document.getElementById("publisherInput").value,
    "alter_ego": document.getElementById("alterInput").value,
    "first_appearance": document.getElementById("firstInput").value,
    "image": document.getElementById("imageInput").value,
  }

  await postData(url, newHero);  

  form.reset();
})


