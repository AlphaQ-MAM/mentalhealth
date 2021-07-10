const express = require('express');
const Student = require('../models/Student');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passwordValidator = require('../validation/password');




//POST: creating user with data passed in signup form
exports.registerStudent = (req, res, next) => {
    const name = req.body.name;
    const email_id = req.body.email_id;
    const password = req.body.password;
    if (!passwordValidator.validator(password)) {
        res.status(400).send({ msg: "Incorrect parameters", password: passwordValidator.errMessage });
        return;
    }
    bcrypt.hash(password, 12).then(hashedPassword => {
        const stud = new Student({
            name: name,
            password: hashedPassword,
            email_id: email_id,
            checkStaff: false,
            
        });
        const validationErrors = stud.validateSync();

        if (validationErrors !== undefined) {
            const err = {
                message: "Incorrect parameters!",
            };
            Object.keys(validationErrors.errors).forEach((key) => {
                err[key] = validationErrors.errors[key].message;
            });
            res.status(400).send(err);
            return;
        }
        return stud.save();
    }).then(result => {
        res.status(200).send({ msg: "Created" });
    })
        .catch(err => {
            res.status(500).send('Internal server error');
        });
};
//POST:Logging in with data
exports.login = (req, res, next) => {
    const email_id = req.body.email_id;
    const password = req.body.password;
    let loadedUser;
    Student.findOne({ email_id: email_id }).then(
        user => {
            if (!user) {
                return res.status(401).send({ msg: "User with this email does not exist" });
            }
            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                return res.status(401).send({ msg: "Wrong Password" });
            }
            const token = jwt.sign(
                {
                    userId: loadedUser._id.toString(),
                    username: loadedUser.name
                },
                'somesupersecretsecret',
                { expiresIn: '24h' }
            );
            res.status(200).json({ token: token, loadedUser });
        }).catch(err => res.status(500).send('Internal server error'));
    ;
};

exports.registerStaff = (req, res, next) => {
    const name = req.body.name;
    const email_id = req.body.email_id;
    const password = req.body.password;
    if (!passwordValidator.validator(password)) {
        res.status(400).send({ msg: "Incorrect parameters", password: passwordValidator.errMessage });
        return;
    }
    bcrypt.hash(password, 12).then(hashedPassword => {
        const stud = new Student({
            name: name,
            password: hashedPassword,
            email_id: email_id,
            checkStaff: true,

        });
        const validationErrors = stud.validateSync();

        if (validationErrors !== undefined) {
            const err = {
                message: "Incorrect parameters!",
            };
            Object.keys(validationErrors.errors).forEach((key) => {
                err[key] = validationErrors.errors[key].message;
            });
            res.status(400).send(err);
            return;
        }
        return stud.save();
    }).then(result => {
        res.status(200).send({ msg: "Created" });
    })
        .catch(err => {
            res.status(500).send('Internal server error');
        });
};
