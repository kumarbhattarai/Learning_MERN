const { nanoid } =require('nanoid')
const url=require('../models/data')
async function shortUrl(req,res){
    const body=req.body
    const inputUrl = body.url
    const userIp = req.ip;
console.log("User IP:", userIp);
    if(!body){
        res.status(400).json({err:"url is reqd"})
    }

    const existingUrl = await url.findOne({ redirecturl: inputUrl });
    if(existingUrl){
        // console.log("Existing URL:", existingUrl);
        const allUrls = await url.find({});
        res.render("index",{
            id:existingUrl.shortid,
            urls: allUrls,
        })
    }
    else{
    const shortId=nanoid(8)
    await url.create({
        shortid:shortId,
        redirecturl:inputUrl,
        History:[],
        createdBy:req.user._id  
    })
    // console.log("New short ID:", shortId)
    const allUrls = await url.find({createdBy:req.user._id});
    res.render("index", {
        id: shortId,
        urls: allUrls,
    });

}
// console.log("Request body:", req.body);
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
async function testurl(req,res){
    return await res.render("index")
}
module.exports={
    shortUrl,
    showdata,
    getAnalytics,
    testurl,
};