const mongoose = require("mongoose");
const Questions = require("./Question")


const Schema = mongoose.Schema;

const Test = new Schema({
    test_name: {
        type: String,
        required:true
    },

    // // date: {
    // //     type: Date,
    // //     required:true
    // // },

    questions: [
        {
            question_id: {
                type: Schema.Types.ObjectId,
                ref:'Questions',
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('Test', Test);