// const order = require("../model/orderSchema");

// const Createorder = async (req, res) => {
//     const {
//         name,
//         phone,
//         address
//     } = req.body

//     const orderdetails = await order.create({
//         name,
//         phone,
//         address
//     });

//     res.json(orderdetails);
// };



// const getorder=async(req,res)=>{
//     const foodList = await food.find()
//     res.json(foodList)
// };

// module.exports={getorder,Createorder}

// orderController.js

const Order = require("../model/orderSchema");

const Createorder = async (req, res) => {
  try {
    const { userInfo, cartItems, totalPrice } = req.body;
    
    // Save order details to the database
    const order = new Order({
      userInfo: userInfo,
      cartItems: cartItems,
      totalPrice: totalPrice
    });
    await order.save();
    
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Failed to place order' });
  }
};
const getorder = async (req, res) => {
  try {
    const user = await Order.findOne({ "userInfo.email": req.params.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).send(user.cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).send("Internal Server Error");
  }
};


module.exports = { Createorder,getorder };
