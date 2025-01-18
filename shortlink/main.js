const express=require('express')
const UserUrl=require('./routes/data')
const {mdbConnection}=require('./connection')
const url=require('./models/data')
const path=require('path')
const static=require('./routes/static')
const userRoute=require('./routes/user')
const cookieParser=require('cookie-parser')
const { restrictToLogin } = require('./middlewares/auth')
const app=express()
const PORT=3000

mdbConnection("mongodb://localhost:27017/shortid")

app.set('view engine',"ejs")
app.set('views',path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


app.use('/',UserUrl);
app.use('/user',userRoute);
app.use("/test",restrictToLogin,static)
app.listen(PORT,()=>{
    console.log('Server started at port'+PORT)
})