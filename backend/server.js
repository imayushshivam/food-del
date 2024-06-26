import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
// import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dotenv from "dotenv";
//idk why i m facing  issue with this config file n all
dotenv.config();

//app config
//initialising app using the express pack
const app = express();
//define port number for our server
const port = process.env.PORT || 4000;

//middleware
//initiallising
app.use(express.json()); // this will parse all the data in json coming from frontend
app.use(cors()); //we can access the backend from frontend

//DB connection
connectDB();

//api endpoints
//for foodRouter
app.use("/api/food", foodRouter); // endpoint address
app.use("/images", express.static("uploads")); // now uploads folder will xposed on the end point. because we mounted that folder at end point
app.use("/api/user", userRouter);

//initialise end points
app.use("/api/cart", cartRouter);

//use order router to place the users order
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
}); //we can req. the data from the server

//to run the express server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

//mongodb+srv://asp:9198844560@cluster0.olqstuq.mongodb.net/?
