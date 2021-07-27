const jwt = require('jsonwebtoken')

exports.AuthorizeUser = async (req,res,next) => {
    // Check whether token exists
    if(!req.headers['access-token']) return res.status(401).send({msg : "Unauthorised"});

    // Verify Token
    try {
        req.body = await jwt.verify(req.headers['access-token'], 'SLA_SECRET');
        next();
    } catch(err){
        res.send(err);
    }
}