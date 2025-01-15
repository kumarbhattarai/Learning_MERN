const express=require('express')
const router=express.Router()
const { getAll, getbyid, updatebyid , deletebyid, postform}=require('../controllers/data');
const { updateMany } = require('../models/data');

router
.route('/')
    .get(getAll)
    .post(postform)
router
.route('/:id')
    .get(getbyid)
    .patch(updatebyid)
    .delete(deletebyid)


module.exports=router;