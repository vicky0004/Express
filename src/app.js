// import { express } from "express";
// // import express from "express"; // to use import make type:"module " in package.jason file
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn")
const Register = require("./models/registers");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    // res.send("hello from  friend vicky kumar")
    res.render("index")
})
app.get("/register",(req,res)=>{
    res.render("register");
})


app.post("/register",async (req,res)=>{
    try{
        // console.log("got");
        // console.log(req.body.name);
        const students = new Register({
            name:req.body.name,
            reg:req.body.reg
        })

        const all = await Register.find({});
        res.send(all);

        //for saving data in database
        const registered =await students.save();
        res.status(201).render("index");

    }catch(error){
        res.status(404).send(error);
    }
})

app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
})
