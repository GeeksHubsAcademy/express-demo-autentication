const fs = require('fs');

const logoutController = (req, res) => {
  const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
  const token = req.headers.authorization;
  const foundUser = db.users.find(
    existentUser => existentUser.token === token,
  );

  if (foundUser) {
    delete foundUser.token;
    fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
    res
      .status(200)
      .json({ message: `valid logout`});
  } else {
    res.status(401).json({ message: `invalid token` });
  }
};

module.exports = logoutController;
