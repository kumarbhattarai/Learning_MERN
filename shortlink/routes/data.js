const express=require('express')
const { shortUrl, showdata, getAnalytics } =require('../controllers/data')
const router=express.Router()
router.post('/url',shortUrl)
router.get('/url/:id',showdata)
router.get('/analytics/:shortid',getAnalytics)
module.exports=router