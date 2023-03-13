const postRouter = require('../routes/posts')
const express = require('express');

const app = express()
app.use(express.json())
app.use('/api/posts', postRouter)



module.exports = app;