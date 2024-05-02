const express = require("express");

const { saveProduct } = require("../controllers/product.controller");

const router = express.Router();

router.post("/user-selling-form", saveProduct);

module.exports = router;
