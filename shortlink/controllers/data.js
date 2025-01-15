const { nanoid } =require('nanoid')
const url=require('../models/data')
async function shortUrl(req,res){
    const body=req.body
    if(!body){
        res.status(400).json({err:"url is reqd"})
    }
    const shortId=nanoid(8)
    await url.create({
        shortid:shortId,
        redirecturl:body.url,
        History:[]
    })
    res.json({id:shortId})
}
    async function showdata(req,res){
    const sid=req.params.id
    const result = await url.findOneAndUpdate(
        { shortid: sid },
        { $push: { History: { timestamp: new Date() } } },
        { new: true }
    );
    if (!result) {
        return res.status(404).json({ err: "Short URL not found" });
    }
    res.redirect(result.redirecturl)
}
async function getAnalytics(req,res){
    const shortId=req.params.shortid
    const result=await url.findOne({shortid:shortId})
    return res.json({
        totalclicks:result.History.length,
        analytics:result.History
    })
}
module.exports={
    shortUrl,
    showdata,
    getAnalytics
};