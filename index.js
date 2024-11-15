import express from "express";
import dotenv from "dotenv";// fetch data from env
import dbConnect from "./config/database.js";
import router from "./routes/FeedbackRoutes.js";



const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/api/v1",router)// Mounting API routes
dotenv.config(); //read 

dbConnect();

app.listen(PORT, () => {
  console.log("Server is running at port:", PORT);
});