const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    .then(() => console.log("Database connected successfully! 🔥"))
    .catch(err => console.log("DB Connection Error: ", err));

// Schema (Order format)
const OrderSchema = new mongoose.Schema({
    items: Array,
    totalAmount: Number,
    customerName: String,
    date: { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', OrderSchema);

// API Route - Order Save karne ke liye
app.post('/api/checkout', async (req, res) => {
    try {
        const newOrder = new Order({
            items: req.body.cartItems,
            totalAmount: req.body.total,
            customerName: req.body.name || "Guest"
        });
        await newOrder.save();
res.status(201).json({ 
    success: true, 
    message: "Order placed successfully!", 
    orderId: newOrder._id 
});    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});