const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const hookUserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

hookUserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

hookUserSchema.post("save", function (doc) {
  console.log(`👤 New user created: ${doc.email}`);
});

hookUserSchema.pre(/^find/, function (next) {
  this.where({ isActive: true });
  next();
});

hookUserSchema.methods.getProfile = function () {
  return {
    name: this.name,
    email: this.email,
    createdAt: this.createdAt,
  };
};

hookUserSchema.statics.findByEmailDomain = function (domain) {
  return this.find({ email: new RegExp(`@${domain}$`, "i") });
};

module.exports = mongoose.model("HookUser", hookUserSchema);
