const product = require("./productSchema");

const CreateProduct=async(req,res)=>{
    const {name,description,price,image}=req.body;
    
    const productdetails =await product.create({
        name,description,price,image
    })
    res.json(productdetails)
} 
module.exports =CreateProduct;

const getProduct=async(req,res)=>{
    const productitem =await product.find()
    res.json(productitem)
}
module.exports=getProduct
