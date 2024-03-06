const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controllers/userController');
const { validateUser } = require('../validation/userSchema');

// Login route
router.post('/signUp', validateUser, createUser);
router.post('/signIn', validateUser, loginUser);

module.exports = router;
