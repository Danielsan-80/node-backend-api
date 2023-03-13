const postRouter = require('../routes/posts')
const userRouter = require('../routes/users')
const express = require('express');

const app = express()
app.use(express.json())
app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)



module.exports = app;