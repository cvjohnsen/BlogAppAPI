const express = require('express')
const blogsRoute = express.Router()


blogsRoute.post('/username', (req, res)=>{
   let username =req.params.username
   res.status(200).json({message: err.message})
})


blogsRoute.post('/id', (req, res)=>{
    let id= req.params.id 
    res.status(200).json({message: err.message})
})








module.exports = blogsRoute
