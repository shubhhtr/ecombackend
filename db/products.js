const mongoose=require("mongoose");
require("./config");

const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    categ:String,
    user_id:String
});

module.exports=mongoose.model("products",productSchema);
