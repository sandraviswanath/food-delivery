const bcrypt=require('bcrypt');


const fooduser = require('../model/userSchema');
const signup = async(req,res)=>{
    const {name,email,password,phone}=req.body;
    const existinguser = await fooduser.findOne({email});
if(existinguser){
    return res.status(400).json({error:'email alredy exist'})
}
if (password.length < 6) {
    return res.status(400).json({error:'Password must contain a minimum of 6 characters'});
    
}

    const salt=await bcrypt.genSalt(10)
    const hashedpassword =await bcrypt.hash(password,salt)
    
    const userdetails = await fooduser.create({
       name,email,phone,password :hashedpassword

})
res.json(userdetails)
}


const getsignup = async (req, res) => {
    const { email } = req.params;
    const signupdetails = await fooduser.findOne({ email });
    res.json(signupdetails);
}
const getallSignup= async (req, res) => {
    const userList = await fooduser.find()
    res.json(userList)
}

// Backend route to handle user deletion
const deleteUser= async (req, res) => {
    try {
        await fooduser.findByIdAndDelete(req.params.userId);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports={signup,getsignup,deleteUser,getallSignup}





// const signup = async (req, res) => {
//     const { name, course, email, password } = req.body;
    
//     // Check if any required fields are empty
//     if (!name || !email || !password) {
//         res.send("All fields are required");
//         return;
//     }
    
//     // Check if password length is less than 6 characters
//     if (password.length < 6) {
//         res.send("Password must contain a minimum of 6 characters");
//         return;
//     }

//     // Generate salt and hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
    
//     // Create user with hashed password
//     const studentDetails = await student.create({
//         name,
//         email,
//         password: hashedPassword
//     });

//     res.json(studentDetails);
// }

// module.exports = signup;
