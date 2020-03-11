const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const secret = require('../config').secret

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        lowercase: true, 
        unique: true,
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true
    },
    email: {
        type: String,
        lowercase: true, 
        unique: true,
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true
    },
    image: String,
    hash: String,
    salt: String

}, {timestamps: true})

userSchema.plugin(uniqueValidator, {message: 'is already taken.'})

//Method to set user passwords
userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex')
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

//Method to validate passwords
userSchema.methods.validPassword = function(password){
    var hash = crpyto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
    return this.hash === hash
}

//Method to generate a JSON web token
userSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() /1000),
    }, secret);
};

//Method to get JSON of a user for authentication
userSchema.methods.toAuthJSON = function(){
    return{
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
        image: this.image

    }
}


module.exports = mongoose.model('User', userSchema)