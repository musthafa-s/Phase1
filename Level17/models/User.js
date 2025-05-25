const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18 },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.post('save', function (doc) {
  console.log(` New user created: ${doc.email}`);
});

userSchema.pre(/^find/, function (next) {
  this.where({ isActive: true });
  next();
});

userSchema.methods.generateProfile = function () {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    age: this.age,
  };
};

userSchema.statics.findByEmailDomain = function (domain) {
  return this.find({ email: { $regex: new RegExp(`@${domain}$`, 'i') } });
};

module.exports = mongoose.model('User', userSchema);
