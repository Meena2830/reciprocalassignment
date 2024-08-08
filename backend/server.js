const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000', // Allow your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Adjust methods as needed
  credentials: true,
}));

app.use(express.json());

// Registration route
app.post('/api/register', (req, res) => {
  // Handle registration logic here
  // For example:
  const { email, password } = req.body;
  if (email && password) {
    res.json({ message: 'Registration successful!' });
  } else {
    res.status(400).json({ error: 'Invalid registration data' });
  }
});

// Login route
app.post('/api/login', (req, res) => {
  // Handle login logic here
  // For example:
  const { email, password } = req.body;
  if (email && password) {
    res.json({ message: 'Login successful!' });
  } else {
    res.status(400).json({ error: 'Invalid credentials' });
  }
});

app.post('/api/register', (req, res) => {
    const { projectName, projectDescription } = req.body;
  
    if (!projectName || !projectDescription) {
      console.error('Missing projectName or projectDescription in request body');
      return res.status(400).json({ error: 'Invalid project data' });
    }
  
    res.json({ message: 'Project registered successfully!' });
  });
  

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});