const mongoose=require("mongoose");
require("./config");

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    pass:String
});

module.exports=mongoose.model("users",UserSchema);
