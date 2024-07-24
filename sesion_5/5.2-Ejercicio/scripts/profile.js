import DeleteData from "./helpers/deleteData.js";
import PutData from "./helpers/putData.js";
import { USUARIOS } from "./helpers/urls.js";

console.log("sjhfsaf");

let infoUser = JSON.parse(sessionStorage.getItem("infoUser"));

let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");

// botones
let btnEdit = document.getElementById("editar");
let btnGuardar = document.getElementById("guardar");
let btnEliminar = document.getElementById("eliminar");
//formulario
let form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", () => {
  const { id, name, password, email } = infoUser;
  inputName.value = name;
  inputEmail.value = email;
  inputPassword.value = password;

  btnEliminar.setAttribute("id", id);
});

btnEdit.addEventListener("click", () => {
  btnGuardar.classList.remove("d-none");
  btnEdit.classList.add("d-none");
  inputEmail.removeAttribute("disabled");
  inputName.removeAttribute("disabled");
  inputPassword.removeAttribute("disabled");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { id } = infoUser;

  let objUser = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };

  await PutData(`${USUARIOS}/${id}`, objUser);
});

btnEliminar.addEventListener("dblclick", (e) => {
  e.preventDefault();
  console.log(e);
  let id = e.target.id;

  DeleteData(`${USUARIOS}/${id}`).then(() => {
    window.location.href = "../../5.2-Ejercicio/index.html";
    sessionStorage.clear();
  });
});
