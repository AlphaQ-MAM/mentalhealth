const express = require('express');
const router = express.Router();
const ResponseController=require("../controllers/ResponseRouters")


router.route('/:id').post(ResponseController.sendResponse);
router.route('/:testId').get(ResponseController.fetchResponse);



module.exports=router