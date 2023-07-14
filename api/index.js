const postRouter = require('../routes/posts')
const userRouter = require('../routes/users')
const express = require('express');
const cors = require('cors')
const fileUpload = require('express-fileupload')

const app = express()
app.use(express.json())
app.use(fileUpload())
app.use(cors())
app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)



module.exports = app;