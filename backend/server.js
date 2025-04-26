const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Product = require("./productSchema"); // Import product model
const nodemailer = require('nodemailer');
const User = require('./userSchema');


const dbconfig = require('./dbconfig');



const app = express();
app.use(cors());
app.use(express.json());

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});



// Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "product_images",
        format: async () => "png",
        public_id: (req, file) => file.originalname,
    },
});

const upload = multer({ storage });


//nodemailer config to send mail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});




// API to add a product
app.post("/addProduct", upload.single("image"), async (req, res) => {
    try {
        const { title, description, price, originalPrice, category, rate, count } = req.body;
        const image = req.file.path; // Cloudinary image URL

        const newProduct = new Product({
            title,
            description,
            price,
            originalPrice,
            category,
            image,
            rating: {
                rate,
                count,
            }
        });

        await newProduct.save();
        res.status(201).json({ message: "Product added successfully!" });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Error adding product" });
    }
});


// API to get products
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
});




// Send Email API
app.post("/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Contact Form: ${subject}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 10px;">New Contact Message</h2>
            <p><strong>Name:</strong> <span style="color: #555;">${name}</span></p>
            <p><strong>Email:</strong> <span style="color: #555;">${email}</span></p>
            <p><strong>Subject:</strong> <span style="color: #555;">${subject}</span></p>
            <div style="margin-top: 20px;">
                <p style="margin-bottom: 5px;"><strong>Message:</strong></p>
                <div style="background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px; color: #444; white-space: pre-wrap;">
                    ${message}
                </div>
            </div>
            <p style="margin-top: 30px; font-size: 12px; color: #888;">This message was sent from the contact form on your website.</p>
        </div>
    `,
    };


    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send the message." });
    }
});






// 🟢 Signup API
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists!" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: "Signup successful! Please log in." });
    } catch (error) {
        res.status(500).json({ message: "Error signing up" });
    }
});

// 🔵 Login API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found!" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1m" });

        res.status(200).json({ message: "Login successful!", token });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Error logging in" });
    }
});




// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
