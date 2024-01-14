const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    order: {
        type: Array,
        required: true,
    },

});
const product=mongoose.model('product',productSchema)
module.exports=product