const express = require('express');
const router = express.Router();

// ❗ TO‘G‘RI controller import qilish
const { createUser, getUsers } = require('../controllers/userController');

// POST /api/users
router.post('/', createUser);

// GET /api/users
router.get('/', getUsers);

module.exports = router;
