const postForm = document.getElementById("postForm");
const postContainer = document.getElementById("postContainer");

let post = JSON.parse(localStorage.getItem("posts")) || [];
postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("postUserInput").value;
  let content = document.getElementById("postContentInput").value;
  post.push({ username, content });

  localStorage.setItem("posts", JSON.stringify(post));

  postForm.reset();
  displayPosts();
});

const displayPosts = () => {
  post.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";

    let cardUserName = document.createElement("h5");
    cardUserName.textContent = "@" + element.username;
    let cardCont = document.createElement("p");
    cardCont.textContent = element.content;

    card.appendChild(cardUserName);
    card.appendChild(cardCont);

    postContainer.appendChild(card);
  });
};

document.addEventListener("DOMContentLoaded", displayPosts);

//-------------Busqueda------------------------//
const searchPost = () => {
  const searchInput = document.getElementById("searchInput").value;

  // filtros  filter

  const filterPost = post.filter((pro) => pro.username.includes(searchInput));
  postContainer.innerHTML = "";

  filterPost.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";

    let cardUserName = document.createElement("h5");
    cardUserName.textContent = "@" + element.username;
    let cardCont = document.createElement("p");
    cardCont.textContent = element.content;

    card.appendChild(cardUserName);
    card.appendChild(cardCont);

    postContainer.appendChild(card);
  });
};
