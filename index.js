import express from "express";
//import faker from "faker";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import songRouter from "./router/router.js";

const app = express();
dotenv.config();

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.Mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => console.log("connected DB"));
app.use(
  cors({
    origin: ["https://songfrontend.onrender.com"],
  })
);
app.use(express.json());
app.use("/song", songRouter);
app.listen(4000, () => {
  console.log("jvhg");
});
