const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    product_name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    material: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    size: {
        type: String,
        required: true,
        trim: true,
    },
    color: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    condition: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    reason: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    shipping_method: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    mrp: {
        type: Number,
        required: true,
    },
    resell_price: {
        type: Number,
        required: true,
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
