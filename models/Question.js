const mongoose = require("mongoose");
const Section = require("./Section");
const Schema = mongoose.Schema;

const Question = new Schema({
    section_id: {
        type: Schema.Types.ObjectId,
        ref:'Section'
    },
    statement:{
        type: String,
        required:true
    },
    test_id: {
        type: String,
        required:true
    },
    options: [
        {
            optionDesc: {
                type: String,
                required:true
            },
            optionScore: {
                type: Number,
                required:true
            },
        }
    ]
})

module.exports = mongoose.model('Question', Question);