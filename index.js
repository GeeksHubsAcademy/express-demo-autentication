const express = require('express');
const registerController = require('./controllers/registerController')
const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/register', registerController);

app.post('/login', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000);
