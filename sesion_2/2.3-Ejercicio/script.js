// let c = 0
// const dogImage = document.getElementById('dogImage')

// function determinarNota () {
//   console.log(`Hola, estoy dando la vuelta  ${c}`)
//   c++
// }

// async function getData() {
//   const url = "https://dog.ceo/api/breeds/image/random";
//   try {
//     const response = await fetch(url);
//     console.log(response)
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     dogImage.setAttribute('src', json.message);
//     console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// let intervalo = setInterval(getData, 4000)

// function stopIt () {
//   clearInterval(intervalo)
// }

// setTimeout(() => {
//   console.log("Función autoejecutable")
// }, [])

const productsContainer = document.querySelector('.products');
const categoriesContainer = document.getElementById('categoriesSelect');


async function getData() {
  const url = 'https://fakestoreapi.com/products';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

//LISTAR TODOS
async function listarObjetos() {
  let fetchedData = await getData()
  let html = '';

  fetchedData.forEach((product) => {
    html +=/* html */`
      <div class="card">
          <img src="${product.image}" alt="" class="card__img">
          <h1 class="card__title">${product.title}</h1>
          <p class="card__description">${product.description}</p>
          <span class="card__price">${product.price}</span>
      </div>`;
  });
  productsContainer.innerHTML = html;
}


document.addEventListener('DOMContentLoaded', async () => {
  let fetchedData = await getData()

  let options = '';

  fetchedData.forEach((product) => {
    options += `<option value="${product.category}">${product.category}</option>`;
  });

  // BUSCAR POR CATEGORÍA
  categoriesContainer.innerHTML = options;
  let optionSelected = document.getElementById('categoriesSelect')
  let selectedValue = ''
  optionSelected.addEventListener('change', (e) => {
    selectedValue = e.target.value;

    let html = '';

    fetchedData
      .filter((element) => element.category === selectedValue)
      .forEach((product) => {
        html +=/* html */`
        <div class="card">
            <img src="${product.image}" alt="" class="card__img">
            <h1 class="card__title">${product.title}</h1>
            <p class="card__description">${product.description}</p>
            <span class="card__price">${product.price}</span>
        </div>`;
      });
    productsContainer.innerHTML = html;
  })
})
