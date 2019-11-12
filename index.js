const express = require("express");
const registerController = require("./controllers/registerController");
const loginController = require("./controllers/loginController");
const logoutController = require("./controllers/logoutController");
const profileController = require("./controllers/profileController");

const loggingMiddleware = require('./middlewares/loggingMiddleware');
const authorizationMiddleware = require("./middlewares/authorizationMiddleware");

const app = express();

app.use(express.json());

app.use(loggingMiddleware);

app.get("/me", authorizationMiddleware, profileController);

app.post("/register", registerController);

app.post("/login", loginController);

app.get("/logout",authorizationMiddleware, logoutController);


app.use( (req,res) => {
    res.status(404).json({message:'If no one has reply to you yet, this should be a not found error'})
})

app.listen(3000, () => console.log("app listening in localhost:3000"));
