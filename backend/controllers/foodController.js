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

//remove food item
const removeFood = async (req, res) => {
  try {
    //too find the food item which we want to delete
    const food = await foodModel.findById(req.body.id); // by doing this the provide id of the food item will be stored in the food variable
    //to delete the image of the food item from the folder uploads
    fs.unlink(`uploads/${food.image}`, () => {});
    // now by using the id , we will delete the food data from the mongo db
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Eroor" });
  }
};

export { addFood, listFood, removeFood };
