const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);     
app.use('/api/tasks', taskRoutes);     

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// eyJpZCI6IjY4NDlhNGRiMmIyMjZhNmQ0MTNhOGQyOSIsImlhdCI6MTc0OTY1NjgzOCwiZXhwIjoxNzUyMjQ4ODM4fQ.
// mjKwtut_RI6g17pueW1eKkRFaVCtmHLVF6boKflxkFE"