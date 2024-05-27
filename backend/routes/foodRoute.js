import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer"; // usign to create image storage system

const foodRouter = express.Router();

//Image Storage Engine

//using multer disk storage method
// we have to create logic by using that , image will be save to the upload folder
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

//how to use above storage config
const upload = multer({ storage: storage }); // it is middleware uppload

foodRouter.post("/add", upload.single("image"), addFood); // use this method to send the data on the sever, and after processing the data , aur server will respond

export default foodRouter;
