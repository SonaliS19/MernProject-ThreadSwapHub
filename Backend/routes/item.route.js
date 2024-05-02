const express = require("express");

const { addItem, getItems } = require("../controllers/item.controller");

const router = express.Router();

router.post("/add", addItem);
router.get("/fetch/:category", getItems);

module.exports = router;
