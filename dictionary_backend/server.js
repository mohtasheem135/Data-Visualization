const express = require("express");

const app = express();
const cors = require('cors');

require('./DB/conn')

const routeUrls = require("./routes/routes")

// app.use('/app', routeUrls)


// app.use(express.json())
// app.use(cors())

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/app', routeUrls)

app.listen(4000, ()=> {
    console.log("Server is Running >>>>")
})