const jwt = require('jsonwebtoken')

function verifyJWT(req, res, next){
    let token= req.get('Authorization')

    if(token === null || token === undefined){
        res.status(403).json({message:"You must be logged in"})
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, result)=>{
        if(err){
            res.status(400).json({message: "Error!"})
        }
        if (result === false){
            res.status(403).json({message: "You must be logged in!"})
        }
        next()
    })
}

module.exports = verifyJWT

