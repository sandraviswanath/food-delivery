const mongoose=require('mongoose')
const CustomerSchema =mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:Number}
});
const Customer = mongoose.model('Customer',CustomerSchema);

module.exports=Customer;