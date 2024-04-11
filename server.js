import express from "express";
import colors  from "colors";
import dotenv from 'dotenv'
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js"
import connectDb from "./config/db.js";
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
dotenv.config();
//database connect 
connectDb();
//rest object
const app=express();

//middle ware 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
//api

app.use('/api/v1/auth',authRoutes)

app.use("/api/v1/category",categoryRoutes)

app.use("/api/v1/product",productRoutes)
app.get("/",(req,res)=>{
res.send("<h1>Welcome to  mern stack  app</h1>"
);
});

const PORT= process.env.PORT;
app.listen(PORT,()=>{
  console.log(`server started on port ${PORT}`.bgBlue.white);
})