// const jwt = require('jsonwebtoken');
const { valudatetoken }=require('../services/auth')
function checkforauthenticity(cookieName) {
    return (req, res, next) => {
        const tokenvalue = req.cookies[cookieName];
        // console.log(tokenvalue);   
        if (!tokenvalue) {
            req.user = null;
            return next(); 
        }
        try {
            const userpayload = valudatetoken(tokenvalue);
            // console.log(userpayload)
            req.user = userpayload;
        } catch (err) {
            req.user = null;
        }
        // console.log(req.user);
        next(); 
    };
}
module.exports = {  checkforauthenticity, };