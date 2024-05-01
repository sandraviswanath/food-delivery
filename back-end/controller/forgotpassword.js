

// const fooduser = require("../model/userSchema");


// const updateUser = async (req, res) => {
//     const { email } = req.params;
//     const { password } = req.body;

//     try {
//         // Find the user by email
//         const user = await fooduser.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }
//         if (!password) {
//             return res.status(400).json({ error: 'New password is required' });
//         }

//         // Update the password
//         user.password = password;
//         await user.save();

//         // Send success response
//         res.status(200).json({ message: 'Password updated successfully' });
//     } catch (error) {
//         console.error('Error updating password:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }


  
// };

// module.exports =updateUser






const bcrypt = require('bcrypt');
const fooduser = require("../model/userSchema");

const updateUser = async (req, res) => {
    const { email } = req.params;
    const { password } = req.body;

    try {
        // Find the user by email
        const user = await fooduser.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (!password) {
            return res.status(400).json({ error: 'New password is required' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the password with the hashed value
        user.password = hashedPassword;
        await user.save();

        // Send success response
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = updateUser;

