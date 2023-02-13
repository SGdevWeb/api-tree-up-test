const express = require('express');
const router = express.Router();

const userController = require('../controlllers/userController');

router.post('/', userController.signin);

module.exports = router;