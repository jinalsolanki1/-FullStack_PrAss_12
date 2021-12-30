const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require("mongoose");

const userModel = require("./models/user");
mongoose
.connect("mongodb://localhost:27017/practical-12")
.then(()=> console.log('Mongo DB Connected!!'));

app.get("/api/",(req,res)=> res.send("Hello User !"));


//Register
app.post("/api/registration",(req,res)=>{
    const newUser = req.body;
    userModel.create(newUser);
    return res.json({data:"Registration Successfull"}); 
});

//Login
//Login
app.post("/api/login",async (req,res)=>{
    const data = req.body;
    //const pass = req.body.password;
    const user = await userModel.find(data);
    if(user)
    {
        return res.json({data:user});        
    }
    return res.json({data:"Not"});
});
app.listen(port,()=> console.log('Server Running on Port 4000'));
