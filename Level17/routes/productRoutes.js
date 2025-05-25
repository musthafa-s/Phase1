const express = require("express");
const router = express.Router();
const Product = require("../models/Product")

router.post("/", async (req, res) => {
  try {
    const { name, price, category, stock } = req.body;
    const product = new Product({ name, price, category, stock });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const { category, minPrice, maxPrice, sortBy } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (minPrice || maxPrice)
      filter.price = {
        ...(minPrice && { $gte: Number(minPrice) }),
        ...(maxPrice && { $lte: Number(maxPrice) }),
      };

    const sort = {};
    if (sortBy) sort[sortBy] = 1;

    const products = await Product.find(filter).sort(sort);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;
    const result = await Product.find({ $text: { $search: q } });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
});

router.get("/avg-price", async (req, res) => {
  try {
    const result = await Product.aggregate([
      { $group: { _id: "$category", avgPrice: { $avg: "$price" } } },
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Aggregation failed" });
  }
});

router.get("/stats", async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          totalProducts: { $sum: 1 },
          avgPrice: { $avg: "$price" },
          totalStock: { $sum: "$stock" },
        },
      },
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Stats aggregation failed" });
  }
});

module.exports = router;
