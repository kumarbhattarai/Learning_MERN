import fs from "fs/promises" // predefined module
let a= await fs.readFile("kb2.txt") //discarding callback. We can use await directly inside this module.
console.log(a.toString())
// let b= await fs.writeFile("kb2.txt","I am through promises")
let b= await fs.appendFile("kb2.txt","I am through promises")
console.log(b)