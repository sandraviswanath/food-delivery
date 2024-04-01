const express = require("express");
const CartItem = require("./CartSchema");

const FoodItem = require("./fooditemSchema");

const customer = require("./userSchema");

const router = express.Router();

const CreateCart = async (req, res) => {
  try {
    const { email, product } = req.body;
    const user = await customer.findOne({ email: email });
    let cart = await CartItem.findOne({ user: user });
    if (cart) {
      cart = await CartItem.updateOne(
        { user: user },
        {
          $push: {
            products: product,

          },
        }
      );
    } else {
      cart = CartItem.create({
        user: user,
        products: [product],
      });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getCart = async (req, res) => {
  try {
    const user = await customer.findOne({ email: req.params.email  });
    const cartItems = await CartItem.findOne({ user:user });
    res.status(200).send(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).send("Internal Server Error");
  }
};

const updateCart = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedItem = await CartItem.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).send("Item not found in cart");
    }
    res.status(200).send(updatedItem);
  } catch (error) {
    console.error("Error updating item quantity:", error);
    res.status(500).send("Internal Server Error");
  }
};



// const deleteCart = async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const user = await customer.findOne({ email: req.params.email });
//     const cart = await CartItem.findOne({ user: user });

//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     // Remove the product with the provided id from the cart
//     cart.products = cart.products.filter(item => item.id !== productId);
//     await cart.save();

//     res.json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     console.error("Error deleting product:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };



const deleteCart = async (req, res) => {
  try {
    const productId = req.params.id;
    const userEmail = req.params.email;

    // Find the user based on the email
    const user = await customer.findOne({ email: userEmail });

    // Find the cart associated with the user
    const cart = await CartItem.findOne({ user: user });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Remove the product with the provided id from the cart in the database
    cart.products = cart.products.filter(item => item._id !== productId);
    await cart.save();

    // Respond with a success message
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Internal Server Error");
  }
};



module.exports = { CreateCart, getCart, updateCart, deleteCart };
