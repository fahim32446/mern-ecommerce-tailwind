import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: Array },
    sku: { type: String },
    brands: { type: String },
    category: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true }
},
    { timestamps: true }
)

ProductSchema.index({ title: 'text' });

export default mongoose.model('Product', ProductSchema);