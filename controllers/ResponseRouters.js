const express = require("express");
const Response = require("../models/Response")
const mongoose=require("mongoose")

exports.sendResponse = (req, res, next) => {
    const testId = req.params.id
    console.log(req.body.studentId);
    const testResponses = req.body.testResponses;
     const a = [...testResponses];
   const allResponse=a.map(elem => {
       return Response.create({
           test_id: testId,
           student_id: req.body.studentId,
           question_id: elem[0],
           response: elem[1].response,
           score: elem[1].score
       });
   })
    Promise.all(allResponse).then(result => {
        res.status(200).send( "Created" );
    }).catch (err => {
    res.status(500).send('Internal server error');
});
}

exports.fetchResponse=(req, res, next)=> {
    const testId = req.params.testId
    console.log(testId)
    const studentId="9800"
  //  const studentId = req.body.studentId

    Response.find({ test_id: testId }).populate("question_id").exec().
    then(
        (response) => {
            res.status(200).send({ data: response })
        }).catch(err => {
            res.status(500).send({message:"could not fetch"})
        })
}



