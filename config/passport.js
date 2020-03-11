var passport = require('passport')
var LocalStrategy = require('passport-local').LocalStrategy
var mongoose = require('mongoose')
var User = mongoose.model('User')

//config to get username and password field of req.body from front end
passport.use(new LocalStrategy({
    usernameField: 'user[email]',
    passwordField: 'user[password]'
}, function(email, password, done) {
    User.findOne({email: email}).then(function(user){
        if(!user || !user.validPassword(password)){
            return done(null, false, {errors: {'email or password': 'is invalid'}});
        }

        return done(null, user);
    }).catch(done);
}));

//To use the passport middleware, we'll need to require it in app.js before our routes.
//https://thinkster.io/tutorials/node-json-api/configuring-middleware-for-authentication