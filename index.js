const express = require('express');
const fs = require('fs');
const {generateId} = require('./utils')

const app = express();




app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/register', (req, res) => {
  const user = req.body;
  const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

  const userExists = db.users.some( existentUser => existentUser.email === user.email )

  if (userExists) {
      return res.status(400).json({message:`email ${user.email}  already exists`})
  }

  user.id = generateId();
  db.users.push(user);

  fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));

  res.status(200).json(user);
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000);
