const mongoose=require('mongoose')
const urlSchema=new mongoose.Schema({
    shortid:{
        type:String,
        require:true,
        unique:true,
    },
    redirecturl:{
        type:String,
        required:true,
    },
    History:[{
        timestamp:{
            type:Number,
        },
    }],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"usermodel",
    }
    
},{timestamp:true});
const url=mongoose.model("url",urlSchema)
module.exports=url