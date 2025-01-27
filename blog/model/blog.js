const mongoose=require('mongoose');
const blogschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,  
    },
    coverimageurl:{
        type:String,
        default:'/images/image.png',
    },
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
},
{Timestamps:true},
)
const Blog=mongoose.model('blog',blogschema);
module.exports=Blog;