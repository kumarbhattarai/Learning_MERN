const http=require('http')
const fs=require('fs')
const url=require("url")
const myserver=http.createServer((req,res)=>{
    const myUrl=url.parse(req.url,true)
    console.log(myUrl);
    if(req.url==='/favicon.ico') return res.end();
    const log= `New request received on ${new Date().toLocaleString()} for ${req.url}\n`;

    fs.appendFile("./http.txt",log,(err,data)=>{
        if(err){
            console.log(err);
            res.end("unsuccessful")
        }
        else{
            const username=myUrl.query.name;
            const location=myUrl.query.location
            switch(myUrl.pathname){
               
                case '/':res.end(`hi ${username} from ${location}`);
                break
                case '/gallery': res.end("This is a gallery.");
                break
                default: res.end("error.");
            }
console.log('data fetched')

        }
});
});
myserver.listen(3000,()=>console.log("server started"));