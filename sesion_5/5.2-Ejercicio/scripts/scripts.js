import Getdata from "./helpers/getData.js";
import { USUARIOS } from "./helpers/urls.js";

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  // traerme la inf que tengo en la data.json de usuarios
  const dataUsuario = await Getdata(USUARIOS);
  console.log(dataUsuario);

  // Validar si esta informacion se encuentra en data.json
  const result = dataUsuario.find(
    (fi) => fi.email === email && fi.password === pass
  );

  if (result !== undefined) {
    sessionStorage.setItem("infoUser", JSON.stringify(result));
    form.reset();
    redi();
  } else {
    alert("Email o Password Incorrectos");
  }
});

const redi = () => {
  console.log("redireccion");
  window.location.href = "../../5.2-Ejercicio/pages/home.html";
};
