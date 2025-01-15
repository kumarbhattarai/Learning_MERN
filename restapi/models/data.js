const mongoose = require('mongoose')
const userschema=new mongoose.Schema({
    first_name:{
        type:String,
        require:true,
    },
    last_name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
    }
},
{timestamps:true}
);
const Data=mongoose.model("datas",userschema)
module.exports=Data;