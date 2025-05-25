
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const products = [
  { name: "Laptop", price: 1500, category: "Electronics", stock: 50 },
  { name: "Smartphone", price: 800, category: "Electronics", stock: 120 },
  { name: "Desk Chair", price: 120, category: "Furniture", stock: 40 },
  { name: "Bluetooth Speaker", price: 60, category: "Electronics", stock: 75 },
  { name: "Washing Machine", price: 700, category: "Appliances", stock: 15 },
  { name: "Refrigerator", price: 1100, category: "Appliances", stock: 20 },
  { name: "Microwave", price: 250, category: "Appliances", stock: 35 },
  { name: "Bookshelf", price: 80, category: "Furniture", stock: 45 },
  { name: "Bed Frame", price: 400, category: "Furniture", stock: 30 },
  { name: "Dining Table", price: 600, category: "Furniture", stock: 22 },
  { name: "LED TV", price: 1300, category: "Electronics", stock: 65 },
  { name: "Headphones", price: 200, category: "Electronics", stock: 90 },
  { name: "Keyboard", price: 50, category: "Electronics", stock: 100 },
  { name: "Mouse", price: 40, category: "Electronics", stock: 95 },
  { name: "Vacuum Cleaner", price: 300, category: "Appliances", stock: 18 },
  { name: "Air Conditioner", price: 1500, category: "Appliances", stock: 12 },
  { name: "Coffee Table", price: 150, category: "Furniture", stock: 37 },
  { name: "Curtains", price: 70, category: "Furniture", stock: 55 },
  { name: "Oven", price: 500, category: "Appliances", stock: 20 },
  { name: "Fan", price: 90, category: "Appliances", stock: 60 },
];

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Product.deleteMany(); 
    await Product.insertMany(products);

    console.log(" Sample products seeded!");
    mongoose.disconnect();
  } catch (error) {
    console.error(" Error seeding products:", error);
  }
}

seedDB();
