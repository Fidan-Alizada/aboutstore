
fetch('https://www.googleapis.com/books/v1/volumes?q=qaraqan')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    const randomIndex = Math.floor(Math.random() * data.items.length);
    const randomBook = data.items[randomIndex];
    const title = randomBook.volumeInfo.title;
    const description = randomBook.volumeInfo.description;
    const imageUrl = randomBook.volumeInfo.imageLinks.thumbnail;

    document.getElementById('title').textContent = title;
    document.getElementById('description').textContent = description || "No description available";
    document.getElementById('image').src = imageUrl;
  })
  .catch(error => {
    console.error(error);
  });
