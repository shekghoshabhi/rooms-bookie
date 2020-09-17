const express = require('express')


const route = express.Router() 



route.get('/',(req,res)=>{
   //  return res.render('../static/index')
   return res.sendfile('./static/index.html')
   
})



module.exports = route