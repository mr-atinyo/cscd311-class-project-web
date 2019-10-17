const express = require("express");
const router = express.Router();
const controller = require('../Controllers/myController');

router.get('/',controller.loginController);



module.exports = router;