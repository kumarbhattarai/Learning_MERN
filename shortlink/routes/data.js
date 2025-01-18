const express=require('express')
const { shortUrl, showdata, getAnalytics } =require('../controllers/data')
const { restrictToLogin } = require('../middlewares/auth')
const router=express.Router()
router.post('/url',restrictToLogin,shortUrl)
router.get('/url/:id',showdata)
router.get('/analytics/:shortid',getAnalytics)
module.exports=router