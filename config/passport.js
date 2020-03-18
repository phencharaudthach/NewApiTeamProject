// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose')
// const User = require('../models/user');


// //sign up strategy
// passport.use('local.signup', new LocalStrategy ({
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
// },  function(req, email, password, done) {
//     User.findOne({'email': email}, function(err, user) {
//         if(err) {
//             return done(err)
//         }
// //If this user exists return error
//         if(user) {
//             return done(null, false, {message: 'This email is already in use'})
//         }
//         var newUser = new User();
//         newUser.email = email;
//         newUser.password = newUser.encryptPassword(password)
//         newUser.save(function(err, result) {
//             if(err) {
//                 return done(err)
//             }
//             return done(null, newUser)
//         })
//     })
// }))