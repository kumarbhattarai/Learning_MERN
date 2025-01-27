const mongoose = require('mongoose')
async function connection(url){
    await mongoose.connect(url)
    .then(()=>console.log("mongoDB connected"))
    .catch((err)=>console.log(err))
}
module.exports={
    connection,
}