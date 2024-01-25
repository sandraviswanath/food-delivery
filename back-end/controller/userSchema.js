const mongoose=require('mongoose')
const userSchema =mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
});
const fooduser = mongoose.model('fooduser',userSchema);

module.exports=fooduser;