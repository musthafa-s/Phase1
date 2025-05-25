import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;


app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  console.log(`[${timestamp}] [${method}] [${url}]`);
next(); 
});

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact us at example@example.com");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
