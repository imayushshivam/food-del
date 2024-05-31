import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder } from "../controllers/orderController.js";

//using the express we will create the router.
const orderRouter = express.Router();
//using the above router we will create multiple end points

orderRouter.post("/place", authMiddleware, placeOrder);

export default orderRouter;
