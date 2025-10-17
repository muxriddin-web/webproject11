// 4. models/userModel.js — Foydalanuvchi modeli (schema)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // createdAt va updatedAt avtomatik qo‘shiladi
});

module.exports = mongoose.model('User', userSchema);
