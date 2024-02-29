const bcrypt=require('bcrypt');

const owner = require('./OwnerSchema');
const Ownersignup = async(req,res)=>{
    const {name,email,password,phone}=req.body;
    const existinguser = await owner.findOne({email});
if(existinguser){
    return res.status(400).json({error:'email alredy exist'})
}

    const salt=await bcrypt.genSalt(10)
    const hashedpassword =await bcrypt.hash(password,salt)
    
    const userdetails = await owner.create({
       name,email,phone,password :hashedpassword

})
res.json(userdetails)
}


const getOwnersignup=async(req,res)=>{
    const signupdetails = await owner.find()
    res.json(signupdetails)
}
module.exports={Ownersignup,getOwnersignup}