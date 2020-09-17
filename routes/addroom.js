const express = require('express')
const addroom_route = express.Router()
const roommodel = require('../models/rooms')
const toast = require('toastr')

addroom_route.get('/',(req,res)=>{

    return res.sendfile('./static/addRoom.html')
})

addroom_route.post('/',(req,res,next)=>{
    // if(err) return next(err)
 if(req.body.host  && req.body.residency && req.body.des 
    && req.body.imageurl && req.body.price && req.body.ammenitie){

        var room = {
            hostname : req.body.host,
            residencyname : req.body.residency,
            description  : req.body.des,
            imageurl : req.body.imageurl ,
            price : req.body.price ,
            ammenities: req.body.ammenitie 
        }
        roommodel.create(room , (err,room)=>{
            if(err) return next(err)
            // toast.success('Hotel listed', 'Miracle Max Says')
            res.redirect('/')
        })

    }

})




module.exports = addroom_route