//  5. controllers/userController.js — Logika (create, get users)
const User = require('../models/userModel');

// POST: Yangi user qo‘shish
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Foydalanuvchi yaratildi', user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET: Barcha userlarni olish
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUser, getUsers };
