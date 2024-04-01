const mongoose = require('mongoose')


const orderSchema = mongoose.Schema({
    user: {
        type: Object
       
    },
    products: { 
        type: Array
    },
    totalPrice: Number,
    orderDate: { type: Date, default: Date.now }

});
const order=mongoose.model('order',orderSchema)
module.exports=order