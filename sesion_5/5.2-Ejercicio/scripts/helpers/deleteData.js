// Eliminar un objeto dentro de esa url que es la Data.json
const DeleteData = async (url) => {
  try {
    await axios.delete(url)
    alert("Usuario Eliminado")
  } catch (error) {
    console.error(error);
  }
};


export default DeleteData
