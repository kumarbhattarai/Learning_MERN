// var http = require ('http')
// http.createServer(function(req, res){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.end('<h1>This is my first and second node and another change, more changes,another one testing nodemon. failed, testing again success</h1>')
// }).listen(8080);

//These all functions are used in production so our backend source needs to be hidden , but if we want to show some of our data to public we can use middleware as app.use(express.static('file name'))


const express = require('express')
const app = express()
const port = 3000;
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about',(req,res)=>{
  res.send("I am About")
})
app.get('/home',(req,res)=>{
  res.send("I am home")
})
//Effective way to do above thing is
app.get('/home/:slug',(req,res)=>{
  console.log(req.params)
  console.log(req.query)
  res.send(`hello ${req.params.slug}`)
 
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
