const express = require('express');
const app = express();
const port = 3000;

// Mock data similar to what jsonplaceholder.typicode.com provides
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', username: 'johndoe', phone: '123-456-7890', website: 'johndoe.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', username: 'janesmith', phone: '098-765-4321', website: 'janesmith.com' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', username: 'mikejohnson', phone: '111-222-3333', website: 'mikejohnson.com' },
];

// Endpoint to get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Endpoint to get a user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`REST API server running at http://localhost:${port}`);
});