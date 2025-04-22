import Product from "../models/product.js";
import { isadmin } from "./usercontroller.js";

export async function getproducts(req,res){

    try{

        if(isadmin(req)){
         const products = await Product.find()
         res.json(products)
        }else{

            const products = await Product.find({isavailable:true})
            res.json(products)
        }

    }catch(err){

        res.json({
            message : "failed to add get products",
            error : err
        })
    }
}


export function saveproducts(req,res){

    if (!isadmin(req)){
        res.json({
            message : "you are not able to add product"
        })

        return
    }

    

    console.log(req.user)

          console.log(req.body);
    
        const product = new Product(
            req.body
        
        );
    
        
        
        product.save()
            .then(() => {
                res.json({ message: "product added successfully" });
            })
            .catch((err) => {
                console.error(err);
                res.json({ message: "Failed to add product" });
            });
    }


    export async function deleteproduct(req,res){

        if(!isadmin(req)){
            res.json({

                message : "you can't delete products"
            })

            return
        }


        try{
        await Product.deleteOne({productId : req.params.productId})

        res.json({

            message : "product deleted successfully"
        })
    }catch(err){
        res.json({
            message : "failed server ",
            error : err
           
        })
    }
    }

