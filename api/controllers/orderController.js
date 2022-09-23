import express from 'express';
import Order from "../model/Order.js"


export const CreateOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error)

    }
}


export const UpdateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);

    } catch (error) {
        res.status(500).json(error)

    }

}


export const DeleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}


export const GetOrder = async (req, res) => {

    try {
        const order = await Order.find({ userId: req.params.id }).sort({ _id: -1 });
        res.status(200).json(order);
    } catch (error) {

        res.status(500).json(error)
    }
}


export const GetOrders = async (req, res) => {

    const query = req.query.new;
    try {
        const orders = query ? await Order.find().sort({ _id: -1 }).limit(5) : await Order.find().sort({ _id: -1 });
        res.status(200).json(orders);

    } catch (error) {
        res.status(500).json(error);
    }
}