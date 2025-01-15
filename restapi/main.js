const express=require('express')
const data=require('./Data.json')
const userRouter=require('./routes/data')
const { connection }=require('./connection')
const {reqres}=require('./middlewares/data')
const { stringify } = require('querystring')

const { type } = require('os')

const app=express()
const PORT=3000


connection("mongodb://localhost:27017/User_Data")

app.use (express.urlencoded({extended:false}))
app.use(reqres('log.txt'))
app.use("/api/users",userRouter)
app.listen(PORT,()=>{
    console.log('server started at port' + PORT);
})