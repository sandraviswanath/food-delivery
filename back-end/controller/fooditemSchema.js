const mongoose = require("mongoose");

const fooditemSchema = mongoose.Schema({
  email: {
    type: String,
  },

  name: {
    type: String,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
  },

  fooditems: [
    {
      foodname: {
        type: String,
      },
      foodimage: {
        type: Array,
      },
      price: {
        type: String,
      },
      itemrating: {
        type: String,
      },
    },
  ],
});
const fooditem = mongoose.model("fooditem", fooditemSchema);
module.exports = fooditem;

// const mongoose = require('mongoose');

// const fooditemSchema = mongoose.Schema({
//     email: {
//         type: String,
//     },
//     name: {
//         type: String,
//     },
//     fooditems: [
//         {
//             foodname: {
//                 type: String,
//             },
//             foodimage: {
//                 type: Array,
//             },
//             price: {
//                 type: String,
//             },
//             itemrating: {
//                 type: String,
//             }
//         },
//     ]
// });

// const FoodItem = mongoose.model('foodItem', fooditemSchema);
// module.exports = FoodItem;
