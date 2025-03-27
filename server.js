const express = require('express');
const app = express();
const bookRoutes = require('./routes/books');
const userRoutes = require('./users/auth');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// app.use('/books', bookRoutes);
// app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World, I am Youssouf Mansour');
});

app.listen(4000, () => {
  console.log("Server running on port 6000");
});

