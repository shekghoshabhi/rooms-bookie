const express = require('express')
const room_route = express.Router()
const rooms = require('../models/rooms')

a="hello"
room_route.get('/',(req,res,next )=>{
    // if(req.query.idstate==a) return send("luns")/
    return  res.sendfile('./static/rooms.html')
})


let querystate 
room_route.get('/getrooms',(req,res,next )=>{

    rooms.find()
.then((rooms)=>{
    res.status(200).send(rooms)
    // return  res.sendfile('./static/rooms.html')
}).catch((err)=>{
    throw err
})
})




//query parameter which stores the id of the room which is clicked on
let q 
room_route.get('/room',(req,res,next)=>{
   q = req.query.id
 return res.sendfile('./static/roomDes.html',q)
})
room_route.get('/roomdes',(req,res,next)=>[
    // res.send(q) 
    rooms.findById(q)
    .then((room)=>{
        res.status(200).send(room)
    }).catch((err)=>{
        throw err
    })
])


// room_route.get('/')




module.exports = room_route