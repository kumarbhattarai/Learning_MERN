// var http = require ('http')
// http.createServer(function(req, res){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.end('<h1>This is my first and second node and another change, more changes,another one testing nodemon. failed, testing again success</h1>')
// }).listen(8080);
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})