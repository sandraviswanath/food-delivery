const mongoose=require('mongoose')
const ownerSchema =mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:Number}
});
const owner = mongoose.model('owner',ownerSchema);

module.exports=owner;