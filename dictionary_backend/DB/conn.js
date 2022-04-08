const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config()

// mongoose.connect("mongodb://localhost:27017/MyTabel", {


mongoose.connect(process.env.DATABASE_ACCESS, ()=> 
    console.log("Data Base Connected"))



//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(()=> {
//     console.log("DB connected");
// }).catch((e)=>{
//     console.log(e, "---- DB Connection Unsuccessfull ----")
// })