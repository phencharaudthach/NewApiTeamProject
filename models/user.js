const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

//User schema
const userSchema = new mongoose.Schema ({
    name: String,
    username: {
        type: String,
        lowercase: true, 
        // unique: true
        // required: [true, "can't be blank"] 
        // match: [/^[a-zA-Z0-9]+$/, 'is invalid']
    },
    email: {
        type: String,
        lowercase: true, 
        // unique: true
        // required: [true, "can't be blank"] 
        // match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    image: String,
    country: String
});


userSchema.plugin(passportLocalMongoose)

