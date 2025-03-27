const axios = require('axios');


async function getAllBooks() {
  const res = await axios.get('http://localhost:4000/books');
  console.log("All books:", res.data);
}

// Task 11 - Get by ISBN (Promise)
function getByISBN(isbn) {
  axios.get(`http://localhost:4000/books/isbn/${isbn}`)
    .then(res => console.log("Book by ISBN:", res.data));
}

// Task 12 - Get by Author
async function getByAuthor(author) {
  const res = await axios.get(`http://localhost:4000/books/author/${author}`);
  console.log("Books by author:", res.data);
}

// Task 13 - Get by Title
async function getByTitle(title) {
  const res = await axios.get(`http://localhost:4000/books/title/${title}`);
  console.log("Books by title:", res.data);
}

// Run all
(async () => {
  await getAllBooks();                 // Task 10
  getByISBN("123456789");              // Task 11
  await getByAuthor("John Doe");       // Task 12
  await getByTitle("Node");            // Task 13
})();
