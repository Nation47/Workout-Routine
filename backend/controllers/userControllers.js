const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// helper to create Jwt
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '3d'})
}

// register User
const registerUser = async (req, res) => {
    const {email, name, password} = req.body;

    try{
        const exist = await User.findOne({email})
        if(exist) throw Error('Email already in use');

        const salt = await bcrypt.genSalt(10);
        const hash  = await bcrypt.hash(password, salt);

        const user = await User.create({email,name, password: hash})
        const token = createToken(user._id);
        res.status(200).json({email,name, token});
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// login User
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user) throw Error('Incorrect Email');

        const match = await bcrypt.compare(password, user.password);
        if(!match) throw Error('Incorrect Password');

        const token = createToken(user._id);
        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    registerUser,
    loginUser
}

