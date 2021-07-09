const mongoose = require("mongoose");
const Questions = require("./Question");
const Tests=require("./Test")
const Student=require("./Student")

const Schema = mongoose.Schema;

const Response = new Schema({
    test_id: {
        type: Schema.Types.ObjectId,
        ref:'Test',
        required: true
    },
    question_id: {
        type: Schema.Types.ObjectId,
        ref:'Question',
        required:true
    },
 student_id: {
       type: String,
         ref:'Student',
     },
    response: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('Response',Response);