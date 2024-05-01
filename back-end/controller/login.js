const bcrypt = require('bcrypt');

const fooduser = require('../model/userSchema');



const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const dbemail = await fooduser.findOne({ email });
      if (dbemail) {
        if (dbemail.email === email && (await bcrypt.compare(password, dbemail.password))) {
          console.log('Login success');
          res.json({ user: dbemail }); // Send the user object in JSON format
        } else {
          console.log('Login failed');
          res.status(401).json({ error: 'Invalid email or password' }); // Send an appropriate error response
        }
      } else {
        console.log('No data in db');
        res.status(404).json({ error: 'User not found' }); // Send an appropriate error response
      }
    } catch (error) {
      console.log('Login error:', error);
      res.status(500).json({ error: 'Internal server error' }); // Send an appropriate error response
    }
  };
 


// const Login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const dbemail = await fooduser.findOne({ email });
//     console.log('User from DB:', dbemail); // Log the user retrieved from the database

//     if (dbemail) {
//       if (dbemail.email === email && (await bcrypt.compare(password, dbemail.password))) {
//         console.log('Login success');
//         res.json({ user: dbemail }); // Send the user object in JSON format
//       } else {
//         console.log('Login failed: Invalid email or password');
//         res.status(401).json({ error: 'Invalid email or password' }); // Send an appropriate error response
//       }
//     } else {
//       console.log('User not found');
//       res.status(404).json({ error: 'User not found' }); // Send an appropriate error response
//     }
//   } catch (error) {
//     console.log('Login error:', error);
//     res.status(500).json({ error: 'Internal server error' }); // Send an appropriate error response
//   }
// };

module.exports = Login;

  
