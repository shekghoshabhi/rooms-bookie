// dependencies
const express = require('express')
const app = express()
const path = require('path'); 
const session = require('express-session')
const passport = require('./passport')

const PORT = process.env.PORT || 3333

// routes
const route = require('./routes/index')
const signup_route = require('./routes/signup')
const room_route = require('./routes/rooms')
const add_room = require('./routes/addroom')
const acc = require('./routes/account')
const payment = require('./routes/payment')

const mongoose = require('mongoose');
const { Db } = require('mongodb');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:'nasknjakasbidsamfkropgrwnk',
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect('mongodb://localhost:27017/hotelUsers', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error',err=>{
    console.log(err)
})



app.use('/',route)
app.use('/signup',signup_route)
app.use('/rooms',room_route)
app.use('/addrooms',add_room)
app.use('/account',acc)
app.use('/payment',payment)
app.get('/success',(req,res)=>{
    return res.sendfile('static/success.html')
})
app.use('/',express.static(__dirname+'/static'))

 







app.listen(PORT,()=>{
    console.log("http://localhost:3333")
})






//app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');






// app.use(express.static(path.join(__dirname, 'static')))
// app.use('/',express.static(__dirname+'/static'))
// app.use('/signup',express.static(__dirname+'/static/signup.html'))

