const express = require('express')
const app = express();

<<<<<<< Updated upstream
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jaliyah:jaliyah123@cluster0-7lgiw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
=======
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
 const newsSearchRouter = require('./routes/dj_news');
 app.use("/sn-users", userRouter);
 app.use("/dj_news", newsSearchRouter);

//Connect to Database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true  })
>>>>>>> Stashed changes
const db = mongoose.connection
db.on('error', error => console.log(error))
db.on('open', () => console.log('Connected to the database'))

<<<<<<< Updated upstream

app.listen(3000)
=======
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true  });
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.on('open', () => console.log('Connected to the database'));

app.use(express.json())

const userRouter = require('./routes/sn-users')
app.use('user',userRouter)

//Listening to Server
app.listen(3000, console.log('Listening to Server'));

>>>>>>> Stashed changes
