var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

const userschema = new  mongoose.Schema({

    email :{
        required : true ,
        type: String ,
        unique:true,
        trim:true 
 
    },
    name :{
        required : true ,
        type: String ,
        trim:true 
 
    },
    password :{
        required : true ,
        type: String 
    },

});

userschema.pre('save',function(next){
let user = this 
bcrypt.hash(user.password, null, null, function(err, hash) {
    // Store hash in your password DB.
    if(err) return next(err)

    user.password = hash 
    next()

});



})

const user = mongoose.model('user',userschema)
module.exports = user

