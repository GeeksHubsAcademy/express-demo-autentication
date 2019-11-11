const express = require('express');
const registerController = require('./controllers/registerController');
const loginController = require('./controllers/loginController');
const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/register', registerController);

app.post('/login',  loginController);

app.listen(3000);
