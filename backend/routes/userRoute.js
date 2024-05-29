import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router(0);

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
