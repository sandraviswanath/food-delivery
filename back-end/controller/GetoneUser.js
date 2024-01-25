const user = require("./userSchema")

const GetOneUser= async(req,res)=>{
    const getid =req.params.id
    const getOne = await user.findById({_id:getid})
    res.json(getOne)
}
module.exports=GetOneUser