const { getUser }=require('../service/auth')
function restrictToLogin(req,res,next){
const uid=req.cookies.userid

if(!uid){
    console.log('no uid found')
    return res.redirect('/user/login')
}
const user=getUser(uid)
if(!user){
    console.log('no user found')

    return res.redirect('/user/login')
}

req.user=user

next()
}
// function checkAuthorization(req,res,next){
//     const uid=req.cookies.userid
//     const user=getUser(uid)
//     req.user=user
//     next()
//     }

module.exports={
    restrictToLogin,
}