const express=require('express')
const { handleSignup, handleLogin } = require('../controllers/user')

const router=express.Router()

router.post('/',handleSignup)
router.post('/login',handleLogin)
router.get('/login',(req,res)=>{
    return res.render("login")
 })
router.get('/signup',(req,res)=>{
   return res.render("user")
})
module.exports=router
