const mongoose = require("mongoose");

const RegisterTemplate = new mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    RePassword: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('MyRegistration', RegisterTemplate)