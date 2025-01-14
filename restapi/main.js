const express=require('express')
const data=require('./Data.json')
const fs=require('fs')
const { stringify } = require('querystring')
const mongoose = require('mongoose')
const { type } = require('os')

const app=express()
const PORT=3000
mongoose.connect("mongodb://localhost:27017/User_Data")
.then(()=>console.log("mongoDB connected"))
.catch((err)=>console.log(err))
//schema
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

app.use (express.urlencoded({extended:false}))
app.use((req,res,next)=>{
    // console.log("This is a middleware")
    // return res.json({msg: "hello from middlware"})
    next();
})
app.use((req,res,next)=>{
    fs.appendFile('log.txt',`Date: ${new Date().toLocaleString()}\n method: ${req.method}\n path:${req.path}\n ip:${req.ip}\n\n`,(err,data)=>{
        next();
    })
    
})

app.get('/api/users',(req,res)=>{
    return res.json(data)
})

app
.route('/api/users/:id')
    .get(async(req,res)=>{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        
    const user=await Data.findById(req.params.id)
    return res.json(user)
})
    .patch(async(req,res)=>{
    // const id=req.params.id;
    // const user=data.find((data)=>data.id==id)
    // const body=req.body
    // if (body.first_name) user.first_name = body.first_name;
    // if (body.last_name) user.last_name = body.last_name;
    // fs.writeFile("./Data.json", JSON.stringify(data,), (err) => {
    //     if (err) {
    //         return res.status(500).json({ status: 'error', message: 'Failed to update user' });
    //     }
    //     return res.json({ status: 'success', id: user.id });
    // });
    await Data.findByIdAndUpdate(req.params.id,{last_name:'Bhattarai'})
    return res.status(200).json({status:'success'})
})
.delete(async(req,res)=>{
    await Data.findByIdAndDelete(req.params.id)
    return res.status(200).json({status:'success'})
})

app.post('/api/users',async(req,res)=>{
    const body=req.body
    const result=await Data.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
    })
    return res.status(201).json({msg:"success"})
})
app.listen(PORT,()=>{
    console.log('server started at port' + PORT);
})