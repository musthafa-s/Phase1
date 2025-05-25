const Product = require('../models/Product');
const User = require('../models/User');
const Order = require('../models/Order');
const mongoose = require('mongoose');
const CustomError = require('../utils/customError');

const createOrder = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const { userId, products } = req.body;

    const user = await User.findById(userId).session(session);
    if (!user) {
      throw new CustomError('User not found', 404);
    }

    let totalAmount = 0;
    const updatedProducts = [];

    for (let item of products) {
      const product = await Product.findById(item.product).session(session);
      if (!product) {
        throw new CustomError(`Product with id ${item.product} not found`, 404);
      }

      if (product.stock < item.quantity) {
        throw new CustomError(`Not enough stock for product ${item.product}`, 400);
      }

      product.stock -= item.quantity;
      await product.save({ session });

      totalAmount += product.price * item.quantity;
      updatedProducts.push({ product: item.product, quantity: item.quantity });
    }

    const order = new Order({
      user: userId,
      products: updatedProducts,
      totalAmount,
    });

    await order.save({ session });

    user.purchaseHistory.push({ order: order._id });
    await user.save({ session });

    await session.commitTransaction();
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    await session.abortTransaction();
    next(error);
  } finally {
    session.endSession();
  }
};

module.exports = { createOrder };
