import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});
app.get('/api/users', (req, res) => {
    
    const users = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com" },
        { id: 2, name: "Bob Smith", email: "bob@example.com" },
        { id: 3, name: "Charlie Lee", email: "charlie@example.com" }
      ];

    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
