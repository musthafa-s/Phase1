import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let products = [
    { id: 1, name: "Laptop", price: 999, description: "High-end laptop" },
    { id: 2, name: "Phone", price: 499, description: "Smartphone" },
    { id: 3, name: "Tablet", price: 299, description: "Portable tablet" },
    { id: 4, name: "Headphones", price: 199, description: "Noise-cancelling headphones" },
    { id: 5, name: "Smartwatch", price: 149, description: "Fitness tracking smartwatch" },
    { id: 6, name: "Monitor", price: 249, description: "4K Ultra HD monitor" },
    { id: 7, name: "Keyboard", price: 99, description: "Mechanical keyboard" },
    { id: 8, name: "Mouse", price: 49, description: "Wireless mouse" },
    { id: 9, name: "Speaker", price: 129, description: "Bluetooth speaker" },
    { id: 10, name: "Camera", price: 599, description: "DSLR camera" }
];



app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});


app.get("/products", (req, res) => {
  res.status(200).json(products);
});


app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});


app.post("/products", (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});


app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    const { name, price, description } = req.body;
    products[index] = { id, name, price, description };
    res.status(200).json(products[index]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});


app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    const deleted = products.splice(index, 1);
    res.status(200).json(deleted[0]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
