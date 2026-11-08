const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  // <-- ADD THIS LINE
const User = require('../models/User');
import authMiddleware from '../middleware/authMiddleware'
import Cart from '../models/Cart';
import Product from '../models/Product';

router.post('/add', authMiddleware,async(req,res)=>{
    try{
    const userId = req.user.id 
    const {productID,quantity=1,selectedSize} = req.body

    let cart = await Cart.findOne({userId})

    if(!cart){
        cart = new Cart({userId,items:[],totalQuantity:0,totalPrice:0})
    }

    const product = await Product.findById(productID)
    if(!product){
        return res.status(404).json({message:"Product not found"})
    }
    const itemIndex = cart.items.findIndex(
        (item)=>item.productId.toString() === productID
    )

    if(itemIndex > -1){
        cart.items[itemIndex].quantity +=quantity
    }else{
        cart.items.push({productId,quantity,selectedSize})
    }

    cart.totalQuantity += quantity
    cart.totalPrice += product.price * quantity

    await cart.save();
     res.status(200).json({ message: "Cart updated", cart });
}catch(error){
    console.error(error);
    res.status(500).json({ message: "Server error" });
}
})