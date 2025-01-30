const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'blog',
    }
},
{timestamps:true}
)
const Comment=mongoose.model('comment',commentSchema);
module.exports=Comment;