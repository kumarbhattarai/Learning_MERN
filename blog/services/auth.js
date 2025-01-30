const jwt=require('jsonwebtoken');
const secret='$uper$ecretkumar';

function createtokenforuser(user){
   const payload={
        _id:user._id,
        fullname:user.fullname,
        email:user.email,
        profileimageurl:user.profileimageurl,
        role:user.role,
    }
    return jwt.sign(payload,secret,{expiresIn:'10d'});
}
function valudatetoken(token){
    return jwt.verify(token,secret);
}
module.exports={
    createtokenforuser,
    valudatetoken,
}