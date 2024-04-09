import express from "express";
import colors  from "colors";
import dotenv from 'dotenv'
import morgan from "morgan";

import connectDb from "./config/db.js";
const app=express();
dotenv.config();
//database connect 
connectDb();
//middle ware 
app.use(express.json())
app.use(morgan('dev'))
app.get("/",(req,res)=>{
res.send("<h1>Welcome to  mern stack  app</h1>"
);
});

const PORT= process.env.PORT;
app.listen(PORT,()=>{
  console.log(`server started on port ${PORT}`.bgBlue.white);
})