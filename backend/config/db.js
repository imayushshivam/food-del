import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://asp:9198844560@cluster0.olqstuq.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
