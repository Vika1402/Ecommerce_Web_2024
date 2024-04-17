import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from 'path'
import { fileURLToPath } from 'url'

// Configure environment variables
dotenv.config();

// Database configuration
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rest object
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Serve static files
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Wildcard route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// PORT
const PORT = process.env.PORT || 5000; // Default to port 5000 if PORT is not defined

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server running in  port ${PORT}`.bgCyan.white
  );
});
