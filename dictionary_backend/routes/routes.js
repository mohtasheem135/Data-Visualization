const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const DictionaryTemplateCopy = require("../models/DictionaryModels")
const RegisterTemplateCopy = require("../models/RegisterModel")


router.post('/ddata', (request, response) => {
    const Transfered = new DictionaryTemplateCopy({
            Data: request.body.Data,
            Key: request.body.Key,
            Defination: request.body.Defination
    })
    Transfered.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error);
        })
})

router.post('/register', (request, response) => {
    const TransferedData = new RegisterTemplateCopy({
            Email: request.body.Email,
            Password: request.body.Password,
            RePassword: request.body.RePassword
    })
    TransferedData.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error);
        })
})


router.get('/getddata', (request, response) => {
    DictionaryTemplateCopy.find()
        .then(data => response.json(data))
        .catch(error => response.json(error))
})

router.get('/getregister', (request, response) => {
    RegisterTemplateCopy.find()
        .then(data => response.json(data))
        .catch(error => response.json(error))
})

module.exports = router