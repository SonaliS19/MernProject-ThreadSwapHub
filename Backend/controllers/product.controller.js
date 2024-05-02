const Product = require("../models/product.model");

async function saveProduct(req, res) {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status = 400;
        res.send(error);
    }
}

module.exports = {
    saveProduct,
};
