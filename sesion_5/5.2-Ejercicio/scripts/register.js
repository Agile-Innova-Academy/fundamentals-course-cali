import PostData from "./helpers/postData.js";
import { USUARIOS } from "./helpers/urls.js";

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const pass = document.getElementById("password").value;

  let objUser = {
    id: Math.floor(Math.random() * 100),
    name,
    email,
    password: pass,
  };
  console.log(objUser);

  await PostData(USUARIOS, objUser);
});
