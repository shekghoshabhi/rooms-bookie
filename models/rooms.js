const mongoose = require('mongoose')

const roomschema = new mongoose.Schema({
    hostname :{
        type:String ,
        required:true,
        trim:true
    },
    residencyname :{
        type:String ,
        required:true,
        trim:true
    },
    description :{
        type:String ,
        required:true,
        trim:true
    },
    imageurl :{
        type:String ,
        required:true,
    },
    price :{
        type:String ,
        required:true,
        trim:true
    },
    ammenities :{
        type:String ,
        trim:true
    },
})

const room = mongoose.model('room',roomschema)
module.exports = room
