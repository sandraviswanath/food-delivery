

const express = require('express');
const CartItem = require('./CartSchema');
const FoodItem = require('./fooditemSchema');
const router = express.Router();


const CreateCart = async (req, res) => {
    try {
        const { productId, products, quantity, price} = req.body;
        let existingItem = await CartItem.populate({ productId });

        if (existingItem) {
            existingItem.quantity += quantity;
            await existingItem.save();
            res.status(200).send(existingItem);
        } else {
            const newItem = new CartItem({ productId,products, quantity, price});
            await newItem.save();
            res.status(201).send(newItem);
        }
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).send('Internal Server Error');
    }
};


const getCart = async (req, res) => {
    try {
        const cartItems = await CartItem.findOne({user :req.prams.id});
        res.status(200).send(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).send('Internal Server Error');
    }
};


const updateCart = async (req, res) => {
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


const deleteCart = async (req, res) => {
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

module.exports = { CreateCart, getCart, updateCart, deleteCart };
