// const Collection = require("./CollectionSchema")
const food = require("./foodSchema")


const getonePlace=async(req,res)=>{
    const getplace=req.params.place
    const getone=await food.findById({place:getplace})
    res.json(getone)
}
module.exports = getonePlace