const passport = require('passport')
const express = require('express')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//set key for encrypting cookies, and avoid saving unmodified content
app.use(session({secret: 'secretKey', saveUninitialized: false}))

//middelware to change user value in request to deserialized user
app.use(passport.session())

//middelware to initialise passport for authentication
app.use(passport.initialize())
require('./config/passport.js')

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jaliyah:jaliyah123@cluster0-7lgiw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.on('open', () => console.log('Connected to the database'))


app.listen(3000)