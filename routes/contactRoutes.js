const express = require('express');
const router = express.Router();
const axios = require('axios');

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({
      success: false,
      message: 'Ism yoki xabar kiritilmadi'
    });
  }

  try {
    const text = `
📩 YANGI XABAR
👤 Ism: ${name}
📧 Email: ${email || '—'}
📝 Mavzu: ${subject || '—'}
💬 Xabar:
${message}
    `;

    await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text
      }
    );

    res.json({ success: true });
  } catch (error) {
    console.error('❌ Telegram error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: 'Telegramga yuborilmadi'
    });
  }
});

module.exports = router;

