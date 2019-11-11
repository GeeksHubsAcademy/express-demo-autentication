const fs = require('fs');


const loginController = (req, res) => {
  const user = req.body;
  const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

  const foundUser = db.users.find(
    existentUser =>
    existentUser.email === user.email
    &&
    existentUser.password === user.password,
  );

  if (foundUser) {
     res
      .status(200)
      .json({ message: `valid login`, user:foundUser });
  } else {
     res
       .status(401)
       .json({ message: `invalid login`});
  }
};


module.exports = loginController;