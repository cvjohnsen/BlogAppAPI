const express= require('express')
const User= require('../schemas/userSchema')
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')
const verifyJWT = require('../middleware/jwt')

const authRoute = express.Router()

authRoute.post('/login',(req, res)=>{
    let username = req.body.username
    let password = req.body.password

if(!password || !username){
     res.status(400).json({message: "Please have a username AND password"})
}
   User.findOne({username: username}, (err, result)=>{
   if (err){
       res.status(400).json({message: err.message})
   }    
   if(result === null || result === undefined){
       res.status(404).json({message: "User not found"})
   }
   bcrypt.compare(password, result.password, (err, matching)=>{
       if(matching === false){
           res.status(403).json({message: "Either username or password is incorrect"})
       }
       let token = jwt.sign(username, process.env.JWT_SECRET)
       res.setHeader('Authorization', token)
       res.status(200).json({data: result})
        })
    })
})

authRoute.post('/register',async(req, res)=>{
    let user= req.body
    let password= user.password
    let salt =Number(process.env.SALT)

    if(!password || !user.username){
        res.status(400).json({message: "Please have a username AND password"})
    }
    let hashedPassword = await bcrypt.hash(password, salt)
     user.password = hashedPassword

     User.create(user, (err, result)=>{
        if(err){
            res.status(404).json({message: err.message})
        }
        if(result === undefined || result === null){
             res.status(400).json({message: "Please make a unique user"})
        }
        res.status(200).json({data: result})
    }) 
 })

authRoute.get('/', verifyJWT, (req, res)=>{
    User.find((err, result)=>{
        if (err){
            res.status(404).json({message: err.message})
        }
        if(result === null || result === undefined || result ===[]){
            res.status(404).json({message: "User not found"})
        }
        res.status(200).json({data: result})
    })
})





module.exports = authRoute