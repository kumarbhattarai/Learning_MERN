const express=require('express')
const router=express.Router()
//define the home page route
router.get('/',(req,res)=>{
    res.send('blog home page')
})
router.get('/about',(req,res)=>{
    res.send('About blog')
})
router.get()
module.exports=router