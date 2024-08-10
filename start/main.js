// var http = require ('http')
// http.createServer(function(req, res){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.end('<h1>This is my first and second node and another change, more changes,another one</h1>')
// }).listen(8080);


// import {a,b,c} from "./module.js"  ----Named export----
// console.log(a)
// console.log(b)
// console.log(c)

import obj from "./module.js" //----Defaule export, we can even use any other name rather than 'obj' to import every default export.----
console.log(obj)
// ---- These kinds of ES modules work only when we declare '"type":"module",' in package.json just above the debug section----
// ---- If we want to use require then simply remove that '"type":"module",' and----
// let a=require("./module2.js")
// console.log(a)// ---- remember to modify the module2.js file too as required ----