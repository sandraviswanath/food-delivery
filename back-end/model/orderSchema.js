// const mongoose = require('mongoose')


// const orderSchema = mongoose.Schema({
//     name:{type:String},
//     address:{type:String},
//     phone:{type:Number},
//     user: {
//         type: Object
       
//     },
//     products: {
//        type: Array
//     },

// });
// const Order=mongoose.model('Order',orderSchema)
// module.exports=Order

// order.js (order model)
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userInfo: {
    type: Object,
    required: true
  },
  cartItems: {
    type: Array,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
