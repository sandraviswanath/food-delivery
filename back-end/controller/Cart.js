const express = require('express');
const CartItem = require('./CartSchema');
const router = express.Router();


// Add item to cart
const CreateCart=async (req, res) => {
    try {
        const { productId, quantity ,procar} = req.body;
        // Check if item already exists in cart
        let existingItem = await CartItem.findOne({ productId });

        if (existingItem) {
            // If item already exists, update quantity
            existingItem.quantity += quantity;
            await existingItem.save();
            res.status(200).send(existingItem);
        } else {
            // If item does not exist, create a new cart item
            const newItem = new CartItem({ productId, quantity ,procar});
            await newItem.save();
            res.status(201).send(newItem);
        }
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Fetch all items in cart
const getCart= async (req, res) => {
    try {
        const cartItems = await CartItem.find();
        res.status(200).send(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Update item quantity in cart
const updateCart= async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const updatedItem = await CartItem.findByIdAndUpdate(id, { quantity }, { new: true });
        if (!updatedItem) {
            return res.status(404).send('Item not found in cart');
        }
        res.status(200).send(updatedItem);
    } catch (error) {
        console.error('Error updating item quantity:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Remove item from cart
const deleteCart= async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await CartItem.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).send('Item not found in cart');
        }
        res.status(200).send('Item removed from cart');
    } catch (error) {
        console.error('Error removing item from cart:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports ={CreateCart,getCart,updateCart,deleteCart};



