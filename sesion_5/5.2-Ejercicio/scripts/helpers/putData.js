// para modificar un objeto que se encuentre dentro de la data

const PutData = async (url, datos) => {
  try {
    await axios.put(url, datos)
    alert("Usuario Modificado exitosamente")
  } catch (error) {
    console.error(error);
  }
};

export default PutData
