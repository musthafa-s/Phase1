import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, '..', 'public');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Hello Express! Go to <a href="/form.html">form.html</a></h1>');
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`<h2>Form submitted successfully!</h2><p>Name: ${name}</p><p>Email: ${email}</p>`);
});

app.listen(PORT, () => {
    console.log(`✅ Server running at: http://localhost:${PORT}`);
});
