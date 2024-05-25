import mongoose, { modelNames } from "mongoose";

//creating the scheme to describe the food model properties
const foodSchema = new mongoose.Schema({
  name: { type: String, require: true }, // by writing this , name will be define a string data type , and it is compulsory to provide the name of food , without that no food will be stored in db
  description: { type: String, required: true },
  price: { type: Number, require: true },
  image: { type: String, require: true },
  category: { type: String, required: true },
});

//now by using the above schema we will create the model
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
