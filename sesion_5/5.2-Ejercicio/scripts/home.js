import Getdata from "./helpers/getData.js";
import { PALETAS } from "./helpers/urls.js";
import ShowCard from "./modules/show.js";

const templateFragment = document.getElementById("template").content;
const containerCards = document.getElementById("containerCards");

document.addEventListener("DOMContentLoaded", async () => {
  const result = await Getdata(PALETAS);
  ShowCard(templateFragment, containerCards, result);
});


