const express = require('express');
const router = express.Router();
const StudentController = require("../controllers/studentController")


router.route('/login').post(StudentController.login);
router.route('/register/student').post(StudentController.registerStudent);
router.route('/register/staff').post(StudentController.registerStaff);



module.exports = router