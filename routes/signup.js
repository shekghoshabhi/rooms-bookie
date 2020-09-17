
const express = require('express')
const signup_route = express.Router()
const User = require('../models/users')
const passport = require('passport')

 


signup_route.get('/',(req,res,next)=>{
   res.sendfile('./static/signup.html')
})

signup_route.post('/',(req,res,next)=>{
 
   if(req.body.name && req.body.email && req.body.password){
        var userData = {
           name : req.body.name ,
           email : req.body.email,
           password : req.body.password 
        }
           console.log(req.body)
        User.create(userData , (err , user )=>{
           if(err) return next(err) 
           return res.redirect('/')
        })


   }else{
      let err = new Error("enter all credentials")
      err.status = 400 
      return next(err)
   }

})

signup_route.post('/Login',passport.authenticate('local',{
successRedirect : '/',
failureRedirect : '/sguj'

}))

module.exports = signup_route