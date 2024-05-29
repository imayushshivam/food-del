import mongoose from "mongoose";

//schema for user
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false } // because the above cartData entry will be created without the data. if it is not false then cartData will not be created without any data
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema); //if the model is not create , it will create the model
export default userModel;
