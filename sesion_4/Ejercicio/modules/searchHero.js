export const searchHero = (texto, data) => {
  const result = data.filter((heroe) => heroe.superhero.toLowerCase().includes(texto.toLowerCase()))
  return result;
}