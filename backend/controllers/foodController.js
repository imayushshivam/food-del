import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item

const addFood = async (req, res) => {
  //logic to store the Food data in the data base
  let image_filename = `${req.file.filename}`; //using this we wil store the upload file name in the variable
  //new food using the food model
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Eroor" });
  }
};

//all food list
// here we will create the logic , using that we cann access all the food item ,and send them as a response
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({}); // we get all the data of the food item in this variable
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Eroor" });
  }
};

export { addFood, listFood };
