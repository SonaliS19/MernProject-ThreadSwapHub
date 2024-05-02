const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    mobile: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
    },
    earning: {
        type: Number,
        default: 0,
    },
    cart: {
        type: [String],
        default: [],
    },
    orders: {
        type: [String],
        default: [],
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
