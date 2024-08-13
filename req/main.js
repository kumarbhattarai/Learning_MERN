const express=require('express')
const blog=require('./routes/blog')
const app = express()
const port=3000
app.use('/blog', blog)
app.use(express.static("public"))
app.get('/',(req,res)=>{
    console.log("This is a get req")
    res.send('This is a get req')
})
app.post('/',(req,res)=>{
    console.log("This is a post req")
    res.send('This is a post req')
})
app.put('/',(req,res)=>{
    console.log("This is a put request")
    res.send('This is a put request')
})
//If we want to serve an html file then
app.get('/index',(req,res)=>{
    console.log("This is an index")
    res.sendFile('template/index.html',{root:__dirname})
})
app.get('/api',(req,res)=>{
    res.json({a:1,B:3,name:"kb"})
})
app.listen(port,()=>{
    console.log(`Listening on port number ${port}`)
})


//After these you need to switch to the postman

