const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = "your_access_secret";

function verifyToken(req,res,next){
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401),json({message:"no token provided"})
    }

    const token = authHeader.split(" ")[1]
    jwt.verify(token,ACCESS_TOKEN_SECRET,(err,decoded)=>{
        if(err){
            return res.status(403).json({message:"Invalid Token"})
        }
        req.user = decoded
        next()
    })
}

module.exports = verifyToken;