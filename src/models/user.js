const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        minlength:4,
        required:true
    },
    email:{
     type: String,
     unique:true,
     validate : {
        validator : function(v) {
            return validator.isEmail(v)
        },
        message : "USer already Exist"
     }
    },
    phone:{
        type:Number,
        unique:true,
        min:10,
        require:true
    },
    message:{
        type:String,
        required:true
    }
})

const UserList = new mongoose.model("UserList",userSchema);
module.exports = UserList;