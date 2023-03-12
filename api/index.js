const postRouter = require('../routes/posts')
const app = require('express')();
const mongoose = require('mongoose')
require ('dotenv').config()

app.use('/api/posts', postRouter)

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to mongodb')
})

module.exports = app;