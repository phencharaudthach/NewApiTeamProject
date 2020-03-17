const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator')
// const bcrypt = require('bcrypt-nodejs')

//User schema
const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        lowercase: true, 
        unique: true
        // required: [true, "can't be blank"] 
        // match: [/^[a-zA-Z0-9]+$/, 'is invalid']
    },
    email: {
        type: String,
        lowercase: true, 
        unique: true
        // required: [true, "can't be blank"] 
        // match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password: String
});
// //Get password and hash it
// userSchema.methods.encryptPassword = (password) => {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
// };

// //Check if password matches hashed password
// userSchema.methods.validPassword = (password) => {
//     return bcrypt.compareSync(password, this.password)
// };


module.exports = mongoose.model('User', userSchema);