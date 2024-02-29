// const mongoose = require('mongoose');

// const cartItemSchema = new mongoose.Schema({
//     productId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'fooditem',
//         required: true
//     },
//     quantity: {
//         type: Number,
//         default: 1
//     },
//     name:{
//         type:Array,
//     },
//     email:{
//         type:String,
//     },
//     price:{
//         type:Number,
//     },
//     image:{
//         type:String,
//     }
// });

// const CartItem = mongoose.model('CartItem', cartItemSchema);

// module.exports = CartItem;




const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'fooditem',
       type: Array,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
      
       
    },
    products: {
       type: Array
    },
    quantity: {
        type: Number,
        default: 1
    },
   
    price:{
        type:Number,
    }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;
