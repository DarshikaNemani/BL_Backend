const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: { type: Number, min: 12 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
