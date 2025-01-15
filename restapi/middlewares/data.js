const fs=require('fs')
function reqres(filename){
    return (req,res,next)=>{
        fs.appendFile(filename,`Date: ${new Date().toLocaleString()}\n method: ${req.method}\n path:${req.path}\n ip:${req.ip}\n\n`,(err,data)=>{
            next();
        })
    }
}
module.exports={
    reqres,
}