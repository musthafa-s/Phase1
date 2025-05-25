import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/search", (req, res) => {
    const query = req.query.id;
    const limit = parseInt(req.query.limit) || 10;

    const users = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com" },
        { id: 2, name: "Bob Smith", email: "bob@example.com" },
        { id: 3, name: "Charlie Lee", email: "charlie@example.com" },
        { id: 4, name: "Diana Prince", email: "diana@example.com" },
        { id: 5, name: "Ethan Hunt", email: "ethan@example.com" },
        { id: 6, name: "Fiona Gallagher", email: "fiona@example.com" },
        { id: 7, name: "George Clooney", email: "george@example.com" },
        { id: 8, name: "Hannah Montana", email: "hannah@example.com" },
        { id: 9, name: "Ian Somerhalder", email: "ian@example.com" },
        { id: 10, name: "Jack Sparrow", email: "jack@example.com" }
    ];

    if (!query) {
        return res.status(400).send("Please provide a search query like '?id=1'");
    }

    const filteredUsers = users
        .filter(user => user.id == query)
        .slice(0, limit);

    if (filteredUsers.length === 0) {
        return res.status(404).send("No users found for the given ID.");
    }

    res.json(filteredUsers);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});