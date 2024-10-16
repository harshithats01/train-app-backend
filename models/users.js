const Mongoose = require("mongoose")

const userSchema=Mongoose.Schema(
    {
       
        pnr_no:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        phone_no:{
            type:String,
            required:true
        },
        email: {
            type:String,
            required:true
        },
        password: {
            type:String,
            required:true
        }

    }
)

var userModel =Mongoose.model("users",userSchema)
module.exports=userModel