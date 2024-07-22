export const postData = async (url, data) => {
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(
      alert("Elemento creado")
    );
  } catch (error) {
    console.error("Error fetching data")
  }
}