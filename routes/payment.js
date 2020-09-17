const express = require('express')
const payment_route = express.Router()
var DateDiff = require('date-diff');

let days
payment_route.get('/',(req,res)=>{

    let date1 = req.query.checkin
    let date2 = req.query.checkout
    console.log(date1 , date2)

var startDate = Date.parse(date1);
var endDate = Date.parse(date2);
var timeDiff = endDate - startDate;
 console.log(Math.floor(timeDiff / (1000 * 60 * 60 * 24)))
  days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) 

 
    return res.sendfile('./static/payment.html')
})

let ammount = days

payment_route.post('/',(req,res)=>{


    return res.sendfile('./static/payment.html')
})


module.exports = payment_route