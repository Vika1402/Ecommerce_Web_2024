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
const staticFilesPath = path.join(__dirname, 'client', 'build');
console.log("Static files path:", staticFilesPath); // Log the static files path
app.use(express.static(staticFilesPath));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Wildcard route to serve the React app
app.get('*', (req, res) => {
  const indexPath = path.join(staticFilesPath, 'index.html');
  console.log("Serving index.html:", indexPath); // Log the path of index.html being served
  res.sendFile(indexPath);
});

// PORT
const PORT = process.env.PORT || 5000; // Default to port 5000 if PORT is not defined

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`.bgCyan.white
  );
});
