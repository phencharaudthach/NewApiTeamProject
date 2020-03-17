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
 const userRouter = require('./routes/sn-users')
 app.use("/sn-users", userRouter)

//Connect to Database
const mongoose = require('mongoose')
<<<<<<< HEAD


mongoose.connect('mongodb+srv://jaliyah:jaliyah123@cluster0-7lgiw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
=======
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true  })
>>>>>>> 30a4b91b7366219ec3a6a3e79b36ceb3b79ddc8a
const db = mongoose.connection
db.on('error', error => console.log(error))
db.on('open', () => console.log('Connected to the database'))

<<<<<<< HEAD
app.use(express.json())

const userRouter = require('./routes/sn-users')
app.use('user',userRouter)

app.listen(3005)
=======
//Listening to Server
app.listen(3000, console.log('Listening to Server'))
>>>>>>> 30a4b91b7366219ec3a6a3e79b36ceb3b79ddc8a
