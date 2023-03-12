const postRouter = require('../routes/posts')
const app = require('express')();
const mongoose = require('mongoose')

app.use('/api/posts', postRouter)

mongoose.connect().then(()=>{
    console.log('connected to mongodb')
})

module.exports = app;