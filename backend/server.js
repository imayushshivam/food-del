import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

//app config
//initialising app using the express pack
const app = express();
//define port number for our server
const port = 4000;

//middleware
//initiallising
app.use(express.json()); // this will parse all the data in json coming from frontend
app.use(cors()); //we can access the backend from frontend

//DB connection
connectDB();

app.get("/", (req, res) => {
  res.send("API Working");
}); //we can req. the data from the server

//to run the express server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

//mongodb+srv://asp:9198844560@cluster0.olqstuq.mongodb.net/?
