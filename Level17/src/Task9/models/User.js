const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  purchaseHistory: [
    {
      order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
