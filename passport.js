const passport = require('passport')
const LocalStrategy = require('passport-local')
const users = require('./models/users')
// const user = require('./models/users')
const bcrypt = require('bcrypt-nodejs')



passport.serializeUser((user,done)=>{
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
  users.findById(id,(err,user)=>{
      done(err,user)
  })
})

passport.use(new LocalStrategy({usernameField : 'email'} ,(email , password , done)=>{
    
    users.findOne({email :email })
    .then((user)=>{
        if(!user ) return done(null,false)
        
        bcrypt.compare(password, user.password , function(err, res) {
            // res == true
            if(err) return done(null,false)
        
            return done(null,user)
        });      
    }).catch(done)
  
}))

module.exports = passport 