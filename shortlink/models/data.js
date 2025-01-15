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
    
},{timestamp:true});
const url=mongoose.model("url",urlSchema)
module.exports=url