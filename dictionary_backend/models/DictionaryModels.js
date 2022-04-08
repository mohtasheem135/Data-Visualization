const mongoose = require("mongoose");

const DictionaryTemplate = new mongoose.Schema({

    Data: {
        type: String,
        required: true
    },
    Key: {
        type: String,
        required: true
    },
    Defination: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('MyDictionary', DictionaryTemplate)