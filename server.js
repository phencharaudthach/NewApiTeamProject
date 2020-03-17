require('dotenv').config();
const express = require('express')
// const passport = require('passport')
const app = express();

//MiddleWare

// app.use(bodyParser.urlencoded({ extended: false }));
//set key for encrypting cookies, and avoid saving unmodified content
// app.use(session({secret: 'secretKey', saveUninitialized: false}))

//Middleware to change user value in request to deserialized user
// app.use(passport.session())

//middleware to initialize passport for authentication
// app.use(passport.initialize())
// require('./config/passport.js')
// const indexRouter = require('./routes/index')
// const userRouter = require('./routes/users')

//Connect to Database
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true  })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.on('open', () => console.log('Connected to the database'))

//Listening to Server
app.listen(3000, console.log('Listening to Server'))