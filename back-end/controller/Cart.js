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

const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await CartItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).send("Item not found in cart");
    }
    res.status(200).send("Item removed from cart");
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { CreateCart, getCart, updateCart, deleteCart };
