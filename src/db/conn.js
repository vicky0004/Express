const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://deepak160cc:UX9VjpEH88YyqlLw@cluster0.izjp2bl.mongodb.net/users")
.then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
})