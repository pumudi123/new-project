import express from "express";
import { createOrder } from "../controllers/ordercontroller.js";
const orderRouter = express.Router();


orderRouter.post("/",createOrder)

export default orderRouter;