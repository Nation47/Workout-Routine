const express = require('express');
const router = express.Router();

// controllers
const {registerUser, loginUser} = require('../controllers/userControllers');

// routes
// register new user
router.post('/register', registerUser);

// login user
router.post('/login', loginUser);

module.exports = router;