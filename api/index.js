const postRouter = require('../routes/posts')
const app = require('express')();


app.use('/api/posts', postRouter)



module.exports = app;