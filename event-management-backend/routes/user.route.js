const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/:id', userController.getUserDetails);

module.exports = router;
