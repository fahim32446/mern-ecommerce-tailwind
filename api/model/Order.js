import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    userId: { type: String, required: true },
    products: [
        {   image: { type: String},
            title: { type: String },
            productId: { type: String },
            color: { type: String },
            size: { type: String },
            quantity: { type: Number, default: 1 }
        }
    ],
    amount: { type: Number},
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
},
    { timestamps: true }
)

export default mongoose.model('Order', OrderSchema)