const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // name: {
    //     type: String,
    //     required: true
    // }
},);

// static sigup method

userSchema.statics.signup = async function( email, password) {
    // validation of email and password
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)){
        throw Error ('Email is not valid')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }

    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({ email, password: hash});

    return user
}

// static login method
userSchema.statics.login = async function (email, password) {
    if(!email || !password){
        throw Error('All field must be filled')
    }

    const user = await this.findOne({email});
    if(!user){
        throw Error('Invalid Email')
    }

    const match = await bcrypt.compare(password, user.password);
    if(!match) {
        throw Error('Invalid Password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema);