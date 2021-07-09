const mongoose = require('mongoose');
const Test=require("../models/Test")
const emailValidator = require('../validation/email');
const nameValidator = require('../validation/name');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: (name) => nameValidator.validator(name),
            msg: nameValidator.errMessage
        }
    },
    email_id: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email_id) => emailValidator.validator(email_id),
            msg: emailValidator.errMessage
        }
    },
    password: {
        type: String,
        required: true
    },
    test_id: [
        {
            testId: {
                type: Schema.Types.ObjectId,
                ref: 'Test'
            }
        }
    ],
    checkStaff: {
        type: Boolean,
        default: false,
    }
});
module.exports = mongoose.model('Student', StudentSchema);