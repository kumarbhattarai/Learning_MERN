const express=require('express')
const User=require('../model/data')
const { createHmac } = require('crypto');
const { createtokenforuser } = require('../services/auth');
const router = express.Router();

router.get('/signin',(req,res)=>{
    return res.render('signin');
})
router.get('/signup',(req,res)=>{
    return res.render('signup');
})
router.get('/signout',(req,res)=>{
    res.clearCookie('token');
    return res.redirect('/');
})
router.post('/signup',async (req,res)=>{// for user registration
    console.log(req.body);
const {fullname,email,password}=req.body
if (!fullname || !email || !password) {
    res.send('All fields are required');
  }
  try {
    const data=await User.create({ fullname, email, password });
    return res.redirect('/users/signin')
  } catch (error) {
    console.error(error);
    return res.status(500).send('Something went wrong');
  }

})
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.render('signin', { error: 'Invalid email' });
    }

    const hash = createHmac('sha256', user.salt)
      .update(password)
      .digest('hex');

    if (hash === user.password) {
      const token = createtokenforuser(user);
      console.log(token);

      return res.cookie("token", token).redirect('/');
    } else {
      return res.render('signin', { error: 'Invalid password' });
    }
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      return res.status(500).send('Something went wrong');
    }
  }
});
module.exports=router