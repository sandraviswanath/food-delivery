const express = require('express');

const router = express.Router();

const CreateChat = async (req, res) => {
    try {
        const { productId, email, name, quantity, price, image } = req.body;
        let existingItem = await CartItem.findOne({ productId });

        if (existingItem) {
            existingItem.quantity += quantity;
            await existingItem.save();
            res.status(200).send(existingItem);
        } else {
            const newItem = new CartItem({ productId, email, name, quantity, price, image });
            await newItem.save();
            res.status(201).send(newItem);
        }
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).send('Internal Server Error');
    }
};