const usermodel=require('../models/user')
const { v4: uuidv4 } = require('uuid');
const { setUser }=require('../service/auth')

async function handleSignup(req,res){
    const {username,email,password}=req.body
    await usermodel.create({
        username,
        email,
        password,
    })
    res.redirect("/user/login")
}
async function handleLogin(req,res){
    const {email,password}=req.body
    const user=await usermodel.findOne({
         email,
        password,
    })
    if(!user){
        res.render("login",{
            error:"Either username or password is wrong"
        })
    }
    const token=setUser(user)
    res.cookie("userid",token)
    res.redirect("/test")

}
module.exports={
    handleSignup,
    handleLogin,
}