let fs=require("fs")
// console.log(fs)
console.log("Starting")
// fs.writeFileSync("kb.txt","Hey i am learning backend")
fs.writeFile("kb2.txt","Hey i am learning backend",()=>{
    console.log("done")
    fs.readFile("kb2.txt",(e,d)=>{
        console.log(e,d.toString())
        //now if we want to write one more and read again and do the same thing again and again well be stuck in a callback hell so better use promises
    })
}) 
fs.appendFile("kb2.txt","Hi i am append",(e,d)=>{
    console.log(d)
})
console.log("Ending")