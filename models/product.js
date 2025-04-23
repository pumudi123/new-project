import { request } from "express";
import mongoose from "mongoose";

const productschema = mongoose.Schema(
    {
     
      productId : {

        type : String,
        required : true,
        unique : true
      },

     name : {

        type : String,
        required : true
      },

      altnames : {

        type : String
      },

      description : {

        type : String,
        required : true
        
      },

      images : {

        type : String
      },

      labelprice : {

        type : Number,


        
        required : true
      },

      price : {

        type : Number,
        required : true
      },

      stock : {

        type : Number,
        required : true,
        unique : true
      },

      isavailable :{

        type : Boolean,
        required : true,
        default :true
      }


    }
)


const Product = mongoose.model("products",productschema)

export default Product;