import Order from "../model/Order.js"
import Product from "../model/Product.js"
import User from '../model/User.js'
import express from "express";

const router = express.Router();


router.get('/orderCount', async (req, res) => {
    try {
        const count = await Order.find().count();
        res.status(200).json(count);
    } catch (error) {
        
    }
})


router.get('/userCount', async (req, res) => {
    try {
        const count = await User.find().count();
        res.status(200).json(count);
    } catch (error) {
        
    }
})


router.get('/productCount', async (req, res) => {
    try {
        const count = await Order.aggregate(
            [
                {
                    $group:
                    {
                        _id: null,
                        totalAmount: { $sum: "$amount" },
                        count: { $sum: 1 }
                    }
                }
            ])

        res.status(200).json(count[0].totalAmount);
    } catch (error) {
        
    }
})


router.get('/sumOrder', async (req, res) => {
    try {
        const count = await Product.find().count();
        res.status(200).json(count);
    } catch (error) {
        
    }
})


export default router;