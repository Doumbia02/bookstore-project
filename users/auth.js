const express = require('express');
const router = express.Router();
let users = {};
let books = require('../data/books.json');

// Task 6 - Register
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users[username]) return res.status(400).send("User exists");
  users[username] = password;
  res.send("User registered");
});

// Task 7 - Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] !== password) return res.status(401).send("Invalid credentials");
  res.send("Login successful");
});

// Task 8 - Add/Modify review
router.post('/review/:isbn', (req, res) => {
  const { username, review } = req.body;
  const book = books.find(b => b.isbn === req.params.isbn);
  if (!book) return res.status(404).send("Book not found");
  book.reviews[username] = review;
  res.send("Review added");
});

// Task 9 - Delete review
router.delete('/review/:isbn', (req, res) => {
  const { username } = req.body;
  const book = books.find(b => b.isbn === req.params.isbn);
  if (book && book.reviews[username]) {
    delete book.reviews[username];
    res.send("Review deleted");
  } else {
    res.status(404).send("Review not found");
  }
});

module.exports = router;
