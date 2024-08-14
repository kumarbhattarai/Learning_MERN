const express=require('express')
let app=express()
let fs=require('fs')
let port=3000
// app.use(express.static("abc"))//middleware; where request first get into and after accessing the files it works on else request.middleware can be used to manipulate request initially.
app.use((req,res,next)=>{
    // we can also append it to the file to keep the record of the login time and all
    const localTime = new Date().toLocaleString();
    fs.appendFileSync("login.txt",`${localTime}\n`)
    console.log(`${Date.now()} and is a ${req.method}\n`)
    next()
})
app.use((req,res,next)=>{
    req.kb="hey i am a new header(request)"
    console.log("2nd middleware")
    next()
})
app.get('/',(req,res)=>{
    res.send("Hello world " + req.kb)
})
app.listen(3000,()=>{
    console.log(`Listening at port ${port}`)
})