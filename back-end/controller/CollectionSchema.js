const mongoose = require('mongoose')


const CollectionSchema = mongoose.Schema({
    title: {
        type:String,
        required: true,
        unique: true
    },
    cover:{
        type:Array,
        required: true,
    },
   place:{
    type:String,
    required: true,
   },
   subtitle: {
    type:String,
    required: true,
},
rating: {
    type:String,
    required: true,
},
fooditems: [
    {
    foodname:{
    type:String,
    required: true,
},
  foodimage:{
    type:Array,
    required: true,
  },
  price:{
    type:String,
    required: true,
},
itemrating:{
    type:String,
    required: true,
},
}
]
});
const Collection=mongoose.model('Collection',CollectionSchema )
module.exports=Collection