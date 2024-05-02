const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route");
const userRoutes = require("./routes/user.route");
const itemRoutes = require("./routes/item.route");

// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define routes
app.get("/", (req, res) => {
    res.send("Hello, World! This is your Express backend.");
});

app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/item", itemRoutes);

// Start the server
const PORT = process.env.PORT || 5050; // Use the provided port or default to 5050
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

mongoose
    .connect(
        "mongodb+srv://sonali:sonali@threadswaphub.hgpho6l.mongodb.net/ThreadSwapHub"
    )
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
