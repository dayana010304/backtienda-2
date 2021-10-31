import mongoose from 'mongoose';
const ProductSchema = mongoose.Schema;

const ProductModel = new ProductSchema({
    sku: {type: String, required: true},
    name: {type: String, required: true},
    stock: {type: String, required: true},
    category: {type: String, required: true},
});

const Product = mongoose.model("product",ProductModel);

export default Product;