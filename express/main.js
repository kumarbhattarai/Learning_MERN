const express = require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('hello from homepage '+ req.query.name );
   
})
app.listen(3000,()=>{
    console.log('listening to port 3000')
})