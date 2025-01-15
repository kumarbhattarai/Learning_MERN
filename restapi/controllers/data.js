const Data=require('../models/data')

async function getAll(req,res){
const allUser=await Data.find({})
return res.json(allUser)
}

async function getbyid(req,res){
    // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    //     return res.status(400).json({ error: "Invalid ID format" });
    // }
    
const user=await Data.findById(req.params.id)
return res.json(user)
}

async function updatebyid(req,res){
        // const id=req.params.id;
    // const user=data.find((data)=>data.id==id)
    // const body=req.body
    // if (body.first_name) user.first_name = body.first_name;
    // if (body.last_name) user.last_name = body.last_name;
    // fs.writeFile("./Data.json", JSON.stringify(data,), (err) => {
    //     if (err) {
    //         return res.status(500).json({ status: 'error', message: 'Failed to update user' });
    //     }
    //     return res.json({ status: 'success', id: user.id });
    // });
    await Data.findByIdAndUpdate(req.params.id,{last_name:'Bhattarai'})
    return res.status(200).json({status:'success'})
}

async function deletebyid(req,res){
    await Data.findByIdAndDelete(req.params.id)
    return res.status(200).json({status:'success'})
}

async function postform(req,res){
    const body=req.body
    const result=await Data.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
    })
    return res.status(201).json({msg:"success", id:result._id})
}
module.exports={
    getAll,
    getbyid,
    updatebyid,
    deletebyid,
    postform,
}