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
    password: {
        type: String
    },
    email: {
        type: String,
        lowercase: true, 
        // unique: true
        // required: [true, "can't be blank"] 
        // match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    image: {
       type: String,
       default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },

    country: {
        type: String,
        default: "US"
    }
});




userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema);