// server.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');

// Config
dotenv.config();

// MongoDB ulanish
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const contactRoutes = require('./routes/userRoutes');
const userRoutes = require('./routes/userRoutes');  // <-- Qo‘shildi!
app.use('/api/contact', contactRoutes);
app.use('/api/users', userRoutes);                   // <-- Qo‘shildi!

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server ishga tushdi: http://localhost:${PORT}`);
});
// app.listen(5000, '192.168.42.125', () => {
//   console.log("Server running on http://192.168.42.125:5000");
// });


