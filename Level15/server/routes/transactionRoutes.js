const express = require('express');
const Transaction = require('../models/transactionModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { amount, category, type, date } = req.body;

    const transaction = new Transaction({
      amount,
      category,
      type,
      date: date || new Date(), 
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to add transaction' });
  }
});


router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(400).json({ error: 'Failed to fetch transactions' });
  }
});


router.get('/filter', async (req, res) => {
  try {
    const { category, startDate, endDate } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (startDate && endDate) {
      filter.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const transactions = await Transaction.find(filter);
    res.status(200).json(transactions);
  } catch (err) {
    res.status(400).json({ error: 'Failed to filter transactions' });
  }
});

module.exports = router;
