const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone_no: {
    type: String,
    required: true,
    trim: true,
    match: /^[0-9]{10}$/ // validates 10-digit phone number (you can adjust as needed)
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  cart_items :{
    type:Array,
    required:false
  }
});

module.exports = mongoose.model('User', userSchema);
