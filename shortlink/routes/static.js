const express=require('express')
const { testurl }=require('../controllers/data')
const router=express.Router()
router.get('/',testurl)

module.exports=router