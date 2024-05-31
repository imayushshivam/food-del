import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  // here we will define the order structure schema.
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, require: true },
  status: { type: String, default: "Food Processing" },
  date: { type: Date, default: Date.now() },
  payment: { type: Boolean, default: false },
});

//now using the above schema , we will create order model.
const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
