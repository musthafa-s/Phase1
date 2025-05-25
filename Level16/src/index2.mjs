import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to our homepage</h1>");
});

app.get("/about", (req, res) => {
  res.send("About Us page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us page");
});

app.get("/services", (req, res) => {
  res.send("Our Services page");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
