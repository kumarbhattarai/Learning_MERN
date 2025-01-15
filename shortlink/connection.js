const mongoose=require('mongoose')
async function mdbConnection(url){
await mongoose.connect(url)
.then(()=>console.log("mongodb Connected"))
}
module.exports={
    mdbConnection,
}