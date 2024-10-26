const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  shareName: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ['profit', 'loss'], required: true },
  date: { type: String, required: true },
  profitLoss: { type: Number, required: true },
  sharesBought: { type: Number, required: true },
});

module.exports = mongoose.model('Investment', investmentSchema);