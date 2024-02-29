const bcrypt = require('bcrypt');

const owner = require('./OwnerSchema');

const OwnerLogin=async(req,res) => {
    const {email,password}=req.body;
    const dbemail=await owner.findOne({email})
    if (dbemail){
if(dbemail.email=== email && (await bcrypt.compare(password,dbemail.password))){
    console.log('login success')
    res.json('login success')
}
else{
    console.log('login failed');
    res.json('login failed')
}
    }
    else{
        console.log('no data in db');
        res.json('no data in db');
    }
    // const salt=await bcrypt.genSalt(10)
    // const hashedPassword=await bcrypt.hash(Password,salt)
    // const userdetail=await User.create({Name,Email,Password:hashedPassword})
    // res.json(userdetail)
}
module.exports =OwnerLogin