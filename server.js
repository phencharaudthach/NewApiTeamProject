const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const app = express();
const session = require('express-session');
const cors = require('cors');
const User = require('./models/user');
require('dotenv/config');
require('./config/passport.js')

//MiddleWare
app.use(cors());
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
app.use(express.static('./public'));

//Connect to Database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
 });
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to the database'));

//Listening to Server
app.listen(3000, console.log('Listening to Server'));