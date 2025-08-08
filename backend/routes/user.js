const express = require('express');
const router = express.Router();

// controllers
const {signupUser, loginUser} = require('../controllers/userControllers');

// routes
// register new user
router.post('/signup', signupUser);

// login user
router.post('/login', loginUser);

module.exports = router;