const express = require('express')
const acc_route = express.Router()


acc_route.get('/',(req,res,next)=>{

    return res.sendfile('./static/acc.html')
})
acc_route.get('/acc_info',(req,res)=>{
    return res.send(
      {user:req.user}
    )
})


module.exports = acc_route 
