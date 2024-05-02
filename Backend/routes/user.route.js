const express = require("express");

const { sayHello, signIn, signUp } = require("../controllers/user.controller");

const router = express.Router();

router.get("/hello", sayHello);
router.post("/signin", signIn);
router.post("/signup", signUp);

module.exports = router;
