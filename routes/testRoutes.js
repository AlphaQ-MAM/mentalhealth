const express = require('express');
const router = express.Router();
const TestController = require("../controllers/TestController")


router.route('/:testId').get(TestController.getTest); //get Test Questions



module.exports=router