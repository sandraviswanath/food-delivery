const mongoose = require('mongoose')


const CollectionSchema = mongoose.Schema({
   
    name:{
        type: String,
        
        
    },
    address:{
        type: String,
       
       
    },
    phone:{
        type: String,
        
    },
    email:{
        type: String,
          
    },
    time:{
        type: String,
         
    },
    title: {
        type:String,
       
    },
    cover:{
        type:Array,
       
    },
   place:{
    type:String,
  
   },
   location:{
    type:String,
  
   },
   subtitle: {
    type:String,
},
rating: {
    type:String,
},
fooditems: [
    {
    foodname:{
    type:String,
   
},
  foodimage:{
    type:Array,
   
  },
  price:{
    type:String,
    
},
itemrating:{
    type:String,
   
},
}
]
});
const Collection=mongoose.model('Collection',CollectionSchema )
module.exports=Collection






