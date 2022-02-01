const mongoose = require('mongoose')


const userSchema = new mongoose.Schema ({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: { type: String, required: true},
    birthday: {type: Date, required: true},
    age: {type: Number, required: true}
})


const userModel= mongoose.model('User', userSchema)




module.exports =userModel