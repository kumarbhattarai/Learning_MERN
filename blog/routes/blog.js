const express=require('express');
const { use } = require('./data');
const Blog=require('../model/blog');
const multer=require('multer');
const Comment=require('../model/comment')
const mongoose=require('mongoose');
const path=require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/uploads/`)
    },
    filename: function (req, file, cb) {
        const filename=`${Date.now()}-${file.originalname}`;
        cb(null, filename)
    }
  })
  
  const upload = multer({ storage: storage })

const router = express.Router();

router.get("/addblog",(req,res)=>{
    return res.render('blog',{
        user:req.user,
    });
})
router.post("/",upload.single('coverimage') ,async(req,res)=>{
    const {title,body}=req.body;
    const blog= await Blog.create({
        title,
        body,
        coverimageurl:`/uploads/${req.file.filename}`,
        createdby:req.user._id,
    })
// console.log(req.body);
// console.log(req.file);
return res.redirect(`/blog/${blog._id}`);//This might show an error, if it does replace blog by blogs !!!!!!
})
router.get("/:id",async(req,res)=>{
    // console.log(req.params.id);
const blog=await Blog.findById(req.params.id).populate('createdby')
const comments=await Comment.find({blog:req.params.id}).populate('user');
// console.log(blog);
    if(!blog){
        return res.status(404).send('Blog not found');
    }
    return res.render('showblog',{
        blog,
        user:req.user,
        comments,
})
})
router.post('/addcomment/:blogid',async (req,res)=>{
    const cont=await Comment.create({
        content:req.body.content,
        user:req.user._id,
        blog:req.params.blogid,
    })
    console.log(cont);
    return res.redirect(`/blog/${req.params.blogid}`);
})

module.exports=router
