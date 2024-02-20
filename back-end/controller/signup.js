const bcrypt=require('bcrypt');


const fooduser = require('./userSchema');
const signup = async(req,res)=>{
    const {name,email,password}=req.body;
    const existinguser = await fooduser.findOne({email});
if(existinguser){
    return res.status(400).json({error:'email alredy exist'})
}

    const salt=await bcrypt.genSalt(10)
    const hashedpassword =await bcrypt.hash(password,salt)
    
    const userdetails = await fooduser.create({
       name,email,password :hashedpassword

})
res.json(userdetails)
}


const getsignup=async(req,res)=>{
    const signupdetails = await fooduser.find()
    res.json(signupdetails)
}
module.exports={signup,getsignup}