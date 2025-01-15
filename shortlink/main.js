const express=require('express')
const UserUrl=require('./routes/data')
const {mdbConnection}=require('./connection')
const app=express()
const PORT=3000
mdbConnection("mongodb://localhost:27017/shortid")

app.use(express.json());
app.use('/',UserUrl);
app.listen(PORT,()=>{
    console.log('Server started at port'+PORT)
})