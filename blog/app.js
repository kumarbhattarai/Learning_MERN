const express=require('express')
const path=require('path')
const userRouter=require('./routes/data')
const blogRouter=require('./routes/blog')
const {connection}=require('./connection')
const cookieparser=require('cookie-parser')
require('dotenv').config()
const { checkforauthenticity }= require('./middlewares/auth')
const Blogs=require('./model/blog')


const app=express();
const port=process.env.PORT||3000;
 connection(process.env.MONGO_URL);
 console.log(process.env.MONGO_URL);
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));


app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(checkforauthenticity('token'));
app.use(express.static(path.resolve('./public')));

app.get('/',async (req,res)=>{
    // console.log(req.user);
    const allBlogs= await Blogs.find({});
    // console.log(allBlogs);
    return res.render('home',{
        user:req.user,
        blogs:allBlogs,
    });
})
app.use('/users',userRouter)
app.use('/blog',blogRouter)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})