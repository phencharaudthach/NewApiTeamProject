const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const app = express();
const session = require('express-session');
const User = require('./models/user');
require('dotenv/config');
require('./config/passport.js')

<<<<<<< HEAD
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
=======
//MiddleWare

// app.use(bodyParser.urlencoded({ extended: true }));

//middleware to initialize passport for authentication
app.use(passport.initialize());
//Middleware to keep track of users session
app.use(session(
    { secret:"Hello World, this is a session",    
     resave: false,    
     saveUninitialized: false    }));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 

// passport.use(new LocalStrategy(User.authenticate())); 


const indexRouter = require('./routes/index')
 const userRouter = require('./routes/sn-users')
 const newsSearchRouter = require('./routes/dj_news');

 app.use(express.json());
 app.use("/sn-users", userRouter);
 app.use("/dj_news", newsSearchRouter);
app.use(express.static('./public'))

//Connect to Database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true  })
>>>>>>> master
const db = mongoose.connection
db.on('error', error => console.log(error))
db.on('open', () => console.log('Connected to the database'))

<<<<<<< HEAD
<<<<<<< Updated upstream

app.listen(3000)
=======
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true  });
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.on('open', () => console.log('Connected to the database'));
=======
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
 });
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to the database'));


>>>>>>> master

app.use(express.json())

const userRouter = require('./routes/sn-users')
app.use('user',userRouter)

<<<<<<< HEAD
//Listening to Server
app.listen(3000, console.log('Listening to Server'));

>>>>>>> Stashed changes
=======


//Listening to Server
app.listen(3000, console.log('Listening to Server'));

>>>>>>> master
