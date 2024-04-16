import express from "express";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import connectDb from "./config/db.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
dotenv.config();
//database connect
connectDb();
//rest object
const app = express();

//middle ware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));
//api

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/category", categoryRoutes);

app.use("/api/v1/product", productRoutes);
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.use('*',function(req,res){
//   res.sendFile(path.join(__dirname,'./client/build/index.html'));
// })

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`.bgBlue.white);
});
