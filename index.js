const express=require("express");
const cors=require("cors");
const User=require("./db/users");
const Product=require("./db/products");
const app=express();

app.use(express.json());
app.use(cors());

app.post("/register",async (req,resp)=>{
    let data=new User(req.body);
    let result=await data.save();
    result=result.toObject();
    delete result.pass;
    resp.send(result);
    console.warn(result);
});

app.post("/login", async (req,resp)=>{

    if(req.body.email && req.body.pass){
        let result=await User.findOne(req.body).select("-pass");
        if(result){
            resp.send(result);
        }
        else{
            resp.send({result:"Invalid data"});
        }
    }
    else{
        resp.send({result:"Data given is incomplete"});
    }
    
});

app.post("/add-pro", async (req,resp)=>{

    let product= new Product(req.body);
    const result=await product.save();
    resp.send(result);

});

app.get("/get-pro", async (req,resp)=>{
    let result=await Product.find();
    if(result.length > 0){
        resp.send(result);
    }
    else{
        resp.send({result:"No products found"});
    }

});

app.listen(5000);