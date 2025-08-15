import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
dotenv.config();

// console.log(process.env.MONGO_URI);

const app = express();



app.listen(5000, () => {
    connectDB();
    console.log("Server is running on port 3000 Hello world! learning mern stack");
});

app.get("/products",(req, res) => {
    res.send("Server is ready and its running on port 5000");
})


