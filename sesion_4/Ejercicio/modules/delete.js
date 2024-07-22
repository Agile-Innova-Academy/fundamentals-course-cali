export const deleteData = async (url, id, data) => {
  const endpoint = `${url}/${id}`
  try {
    await fetch(endpoint, {
      method: 'DELETE',
    }).then(
      alert("Elemento eliminado")
    );
  } catch (error) {
    console.error("Error fetching data")
  }
}