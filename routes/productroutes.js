import express from "express";
import { deleteproduct, getproducts, saveproducts } from '../controllers/productcontroller.js';


const productrouter = express.Router();


productrouter.get("/",getproducts)
productrouter.post("/",saveproducts)
productrouter.delete("/:productId",deleteproduct)


export default productrouter;