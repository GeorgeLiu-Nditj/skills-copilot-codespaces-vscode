// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for comments
let comments = [];

// Endpoint to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Endpoint to add a new comment
app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  if (!name || !comment) {
    return res.status(400).send('Name and comment are required.');
  }
  const newComment = { id: comments.length + 1, name, comment };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});