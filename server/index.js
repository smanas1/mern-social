import express from "express";
import route from "./Routes/route.js";
import mongoose from "mongoose";
import env from "dotenv";

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

// DB Connection
env.config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("DB Connection Failed");
  });

// Middleware to validate request body

app.use(route);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
