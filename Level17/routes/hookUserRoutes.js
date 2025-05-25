const express = require('express');
const router = express.Router();
const HookUser = require('../models/HookUser');

router.post('/', async (req, res) => {
  try {
    const { name, price, category, stock } = req.body;

    const product = new Product({ name, price, category, stock });
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error(' Error creating product:', error); 
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/', async (req, res) => {
  const users = await HookUser.find();
  res.json(users);
});

router.get('/domain/:domain', async (req, res) => {
  const users = await HookUser.findByEmailDomain(req.params.domain);
  res.json(users);
});

module.exports = router;
