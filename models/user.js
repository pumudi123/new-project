import mongoose from "mongoose";

const userschema = mongoose.Schema({

    email : {

        type : String,
        required : true,
        unique : true
    },

    firstname : {

        type : String,
        required : true
    },

    lastname : {
        type : String,
        required : true
    },


    password : {
          
        type : String,
        required : true
    },

    role : {
        type : String,
        required : true,
        default : "costomer"
    },

    isblocked : {

        type : String,
        required: true,
        default : false,
    },
    img : {
        type : String,
        required : false,
        default : "https://cdn-icons-png.flaticon.com/512/219/219970.png"
    }

})

const user = mongoose.model("users",userschema)

export default user