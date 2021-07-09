const express = require("express")
const Questions = require("../models/Question")
const mongoose=require("mongoose");
const Test = require("../models/Test");
exports.getTest = (req, res, next) => {
    const id = req.params.testId;
    console.log(id);
    Questions.find({test_id:id}).then((response) => {
        console.log(response);
        res.status(200).send({questions:response})
    })
        .catch(err => {
        res.status(500).send({message:"Internal Server Error"})
    })
}


