console.log("program is running")
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt, { decode } from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()




const app = express();
app.use(bodyParser.json())

app.use((req,res,next)=>{
    const tokenString = req.header("Authorization")
    if (tokenString != null){
        const token = tokenString.replace("Bearer ", "")
        console.log(token)

        jwt.verify(token,"fiveguys123",(err,decoded)=>{
            if (decoded !=null){
                console.log(decoded)
                req.user = decoded
                next()
            }else{
                console.log("invalid token")
                res.status(403).json({
                    message: "invalid token"
                })
            }
        }
    )
    
    }else{
        next()
    }
    
      //next()
})



mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("connected to the database")
}
).catch((e)=>{
    console.log("database failed")
    console.log(e)
})





//mongodb+srv://pumudi:<db_password>@cluster0.1u1mygq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



app.listen(5300,()=>{
    console.log("server is running on port")
})

