const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    originalPrice: Number,
    category: String,
    image: String, // Cloudinary image URL
    rating: {
        rate: Number,
        count: Number,
    }
});

module.exports = mongoose.model("Product", ProductSchema);