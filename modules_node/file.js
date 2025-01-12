const fs=require('fs')
const os=require('os')
console.log(os.cpus().length)
// fs.writeFileSync('./kb.txt',"this is a text file using file handeling");
// fs.writeFile('./kb.txt', "hi i am async",(err)=>console.log(err))
// const res=fs.readFileSync('./contacts.txt','utf-8')
// console.log(res)
fs.readFile('./contacts.txt','utf-8',(err,data)=>console.log(data))
fs.appendFileSync('./kb.txt', "hey there")
fs.cpSync('./contacts.txt','./kb.txt')

