const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MyTabel", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("DB connected");
}).catch((e)=>{
    console.log(e, "---- DB Connection Unsuccessfull ----")
})