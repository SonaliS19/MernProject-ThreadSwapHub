const bcrypt = require("bcrypt");
const Product = require("../models/product.model");
const User = require("../models/user.model");

async function sayHello(req, res) {
    res.send("Hello, World! This is your Express backend.");
}

async function signUp(req, res) {
    try {
        const { name, mobile, address, email, password, isAdmin } = req.body;
        // check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            mobile,
            address,
            email,
            password: hashedPassword,
            isAdmin,
        });
        await user.save();

        res.status(201).send({ message: "User created" });
    } catch (error) {
        res.status(400).send(error);
    }
}

async function signIn(req, res) {
    try {
        const { email, password, isAdmin } = req.body;
        const user = await User.findOne({
            email,
        });

        if (!user) {
            return res.status(400).send({ message: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send({ message: "Invalid credentials" });
        }

        if (user.isAdmin !== isAdmin) {
            return res.status(400).send({ message: "Invalid credentials" });
        }

        res.send({ message: "User signed in" });
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    sayHello,
    signUp,
    signIn,
};
