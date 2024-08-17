const mongoose =require('mongoose')

const students = new mongoose.Schema({
    name:{
        type: String,
        requires : true
    },
    reg:{
        type:String,
        required: true,
        unique:true
    }
})
const Registers = new mongoose.model("Users",students);
module.exports= Registers;