// const order = require("./orderSchema");




// const orderdata = async (req, res) => {
//     try {
//         // Extract relevant data from the request body
//         const { user, products, totalPrice } = req.body;

//         // Create a new order instance
//         const newOrder = new order({
//             user,
//             products,
//             totalPrice
//         });

//         // Save the order to the database
//         await newOrder.save();

//         // Send a success response
//         res.status(201).json({ message: 'Order placed successfully' });
//     } catch (error) {
//         // Log the error for debugging
//         console.error('Error placing order:', error);
        
//         // Send an error response if there's an issue
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// module.exports = { orderdata };
