const express = require('express')
const bodyParser = require('body-parser')

const helmet =require('helmet')
const dotenv =require('dotenv')
dotenv.config()
const morgan =require('morgan')
const mongoConnect = require('./config')
// Routes
const blogsRoute = require('./routes/blogsRoute')
const authRoute = require('./routes/authRoute')
// app & port
const app = express()
const port = 3000 || process.env.PORT


// App Use
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan('dev'))
app.use('/blog', blogsRoute)
app.use('/auth', authRoute)

app.get('/', (req, res)=>{
    res.status(200).json({message: 'API UP!'})
})

app.listen(port, ()=>{
    mongoConnect()
    console.log(`Server is listening at ${port}`)
})
