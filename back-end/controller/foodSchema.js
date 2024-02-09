const mongoose = require('mongoose')


const foodSchema = mongoose.Schema({
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    name:{
        type:String,
    },
    address:{
        type:String,
    },
    location:{
        type:String,
    },
    time:{
        type:String,
    },
    title: {
        type:String,
        required: true,
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
const food=mongoose.model('food',foodSchema )
module.exports=food