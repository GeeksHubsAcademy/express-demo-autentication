const express = require('express');
const registerController = require('./controllers/registerController');
const loginController = require('./controllers/loginController');
const logoutController = require('./controllers/logoutController');
const profileController = require('./controllers/profileController');

const app = express();

app.use(express.json());

app.get('/me', profileController);

app.post('/register', registerController);

app.post('/login',  loginController);

app.get('/logout', logoutController);


app.listen(3000, () => console.log('app listening in locahost:3000'));
