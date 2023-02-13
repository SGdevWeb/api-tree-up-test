const express = require('express');
const router = express.Router();

const userController = require('../controlllers/userController');

router.post('/signin', userController.signin);
router.post('/login', userController.login)

module.exports = router;