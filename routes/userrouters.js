import express from "express";
import { createuser, loginuser } from "../controllers/usercontroller.js";

const userrouter = express.Router();

userrouter.post("/",createuser)
userrouter.post("/login",loginuser)


export default userrouter;

