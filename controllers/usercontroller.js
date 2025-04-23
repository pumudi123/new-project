import user from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function createuser(req,res){

    if (req.body.role == "admin"){

        if(req.user != null){

            if (req.user.role != "admin"){

                res.json({

                    message : "you are not autharized"
                })
                return
            }

        }else {
            res.status(403).json({
                message : "you are not a admin "
            })
            return
        }
    }

    const hashedpassword = bcrypt.hashSync(req.body.password,10)

    const newuser = new user({

        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password :hashedpassword,
        isblocked : req.body.isblocked,
        role : req.body.role

    })

    newuser.save().then(() => {
        res.json({ message: "user added successfully" });
    })
    .catch((err) => {
        console.log(err);
        res.json({ message: "Failed to add user" });
    });
}

export function loginuser(req,res){
         
        const email = req.body.email
        const password  = req.body.password

        user.findOne({email:email}).then(
            (user)=>{
                if (user==null){
                    res.json({
                        message:"user not fount"                   
                     })
                }else{

                    const ispasswordcorrect = bcrypt.compareSync(password,user.password)
                    if(ispasswordcorrect){
                                 const token = jwt.sign(
                                    {
                                        email : user.email,
                                        firstname: user.firstname,
                                        lastname: user.lastname,
                                        role:user.role,
                                        img : user.img
                                    },
                                    "fiveguys123"
                                 )     


                        res.json({
                            message : "login succesfull",
                            token : token

                        

                            
                        })
                    }else{

                        res.json({
                            message : "invalid password"
                        })
                    }
                }
            }
        )
}


export function isadmin(req){

    if(req.user == null){
           return false
        }
        if (req.user.role != "admin"){
           
           return false
        }

        return true
}
    