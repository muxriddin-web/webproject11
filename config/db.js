//  3. config/db.js — MongoDB ulanish
// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 86400000   // ⏳ 10 soniyagacha kutadi
    });
    console.log(`✅ MongoDB ulandi: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB ulanishda xatolik:", error.message);
    process.exit(1); // jarayonni to‘xtatadi
  }
};

module.exports = connectDB;
