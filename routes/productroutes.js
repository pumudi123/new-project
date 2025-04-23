import express from "express";
import { deleteproduct, getproductbyid, getproducts, saveproducts, updateproduct } from '../controllers/productcontroller.js';


const productrouter = express.Router();


productrouter.get("/",getproducts)
productrouter.post("/",saveproducts)
productrouter.delete("/:productId",deleteproduct)
productrouter.put("/:productId",updateproduct)
productrouter.get("/:productId",getproductbyid)


export default productrouter;

