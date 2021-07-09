const mongoose = require("mongoose");

const Schema = mongoose.Schema

const Section = new Schema({
    sectionName: {
        type: String,
        required:true
    },

    totalScore: {
        type: Number,
        default:0
    },

    test_id: {
        type: Schema.Types.ObjectId,
        required:true
    }
})


module.exports = mongoose.model('Section', Section);