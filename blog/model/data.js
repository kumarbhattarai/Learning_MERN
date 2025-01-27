const mongoose=require('mongoose');
const { createHmac,randomBytes} = require('node:crypto');

const userschema = new mongoose.Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    salt:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    profileimageurl:{
        type:String,
        default:'/images/image.png',
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:'USER',
    },
},
{ timestamps:true }
)
userschema.pre("save",function(next){
const user=this;
if(!user.isModified("password")) return next();
const salt=randomBytes(16).toString();
const hash = createHmac('sha256', salt)
               .update(user.password)
               .digest('hex');
               this.salt=salt;
              this.password=hash;
console.log(salt);
next();
})
const User=mongoose.model('users',userschema);
module.exports=User;