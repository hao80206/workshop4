const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running 🚀');
  });

// User class
class User {
  constructor(username, birthdate, age, email, password) {
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
    this.valid = false;
  }
}

// Fake user "database"
const users = [
  new User('alice', '1995-03-01', 29, 'alice@example.com', '1234'),
  new User('bob', '2000-07-12', 24, 'bob@example.com', '5678'),
  new User('charlie', '1988-10-20', 36, 'charlie@example.com', 'abcd')
];

// Auth route
app.post('/api/auth', (req, res) => {
  const { username, password } = req.body;
  const found = users.find(u => u.username === username && u.password === password);

  if (found) {
    found.valid = true;
    // Exclude password when sending back
    const { password, ...userWithoutPassword } = found;
    res.json(userWithoutPassword);
  } else {
    res.json({ valid: false });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
