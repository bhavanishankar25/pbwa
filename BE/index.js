import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import catRoute from "./routes/cats.js";
import DogRoute from "./routes/dogs.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect =async()=>{
  try{
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB")
  }catch(error){
    throw error;
  }
};
mongoose.connection.on("disconnected",()=>{
  console.log("mongoDB disconnected!");
})

mongoose.connection.on("connected",()=>{
  console.log("mongoDB connected!");
})


app.use(cors())
app.use(cookieParser())

app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/cats", catRoute);
app.use("/api/dogs", DogRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(3001, () => {
  connect();
  console.log("Hello , connected to Backend");
}) 