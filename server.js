const express = require('express')
const app = express();

const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://jaliyah:jaliyah123@cluster0-7lgiw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.on('open', () => console.log('Connected to the database'))

app.use(express.json())

const userRouter = require('./routes/sn-users')
app.use('user',userRouter)

app.listen(3005)