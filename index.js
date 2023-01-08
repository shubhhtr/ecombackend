const express=require("express");
const cors=require("cors");
const User=require("./db/users");
const app=express();

app.use(express.json());
app.use(cors());

app.post("/register",async (req,resp)=>{
    let data=new User(req.body);
    let result=await data.save();
    resp.send(result);
    console.warn(result);
    
});
app.listen(5000);