import express from "express"; 

const app = express();
const PORT = process.env.PORT || 3000;

const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Lee", email: "charlie@example.com" }
];

app.get("/", (req, res) => {
    res.send("Welcome to the Express API!");
});

app.get("/api/users", (req, res) => {
    res.send(users);
});

app.get("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});
