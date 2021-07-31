const jwt = require('jsonwebtoken')

exports.AuthorizeUser = async (req,res,next) => {
    // Check whether token exists
    if(!req.headers['access-token']) return res.status(401).send({msg : "Unauthorised"});

    // Verify Token
    try {
        req.body = await jwt.verify(req.headers['access-token'], process.env.SECRET_KEY);
        next();
    } catch(err){
        res.send(err);
    }
}

exports.isAdmin = async (req,res,next) => {
    if(req.body.existUser.role == "Admin")
        next()
    else
        res.send("You are not an Admin")
}