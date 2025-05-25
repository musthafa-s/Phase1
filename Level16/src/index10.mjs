import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/error', (req, res) => {
    throw new Error("This is a manually thrown error!");
});

app.get('/nonexistent', (req, res) => {
    res.status(404).send("This resource does not exist!");
});

app.get('/cause-error', (req, res) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        throw new Error('Random error occurred!');
    } else {
        res.send('Everything is fine!');
    }
});

app.use((req, res, next) => {
    res.status(404).json({
        error: 'Resource not found',
        message: `The route ${req.originalUrl} was not found.`,
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack); 

    const isDev = process.env.NODE_ENV === 'development';

    if (isDev) {
        res.status(500).json({
            message: err.message,
            stack: err.stack, 
        });
    } else {
        
        res.status(500).json({
            message: 'Something went wrong. Please try again later.',
        });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
