import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import recipesRoutes from './routes/recipe.js';
import { connectDB } from './config/db.js';
import path from 'path'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipesRoutes);

const __dirname = path.resolve

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"/client/dist")))
  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  })
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
