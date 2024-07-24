//  Post es para agregar información en la data.json

const PostData = async (url, datos) => {
  try {
    await axios.post(url, datos);
    alert("Usuario creado exitosamente");
  } catch (error) {
    console.error(error);
  }
};

export default PostData;
