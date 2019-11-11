const fs = require('fs');

const profileController = (req, res) => {

const token = req.headers.authorization;

 const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

 const foundUser = db.users.find(
   existentUser =>
     existentUser.token === token
 );

 if (foundUser) {
     res.json(foundUser);
 } else {
     res.status(401).json({message:'Invalid token'})

 }






//   const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

//   const juan = db.users.find(
//     user => user.email === 'juan@geekshubs.com',
//   );

//   res.json(juan);
};

module.exports = profileController;
