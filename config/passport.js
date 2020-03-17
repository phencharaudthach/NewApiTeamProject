const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = mongoose.model('User')


//Set user ID as session cookie
passport.serializeUser((user, done) => done(null, user.id))

//Get this.id from cookie to use the data
passport.deserializeUser((id, done) => {
  return done(null, getUserById(id))
})

//sign up strategy
passport.use('local.signup', new LocalStrategy ({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},  function(req, email, password, done) {
    User.findOne({'email': email}, function(err, user) {
        if(err) {
            return done(err)
        }
        if(user) {
            return done(null, false, {message: 'This email is already in use'})
        }
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password)
        newUser.save(function(err, result) {
            if(err) {
                return done(err)
            }
            return done(null, newUser)
        })
    })
}))