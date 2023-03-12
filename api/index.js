const postRouter = require('../routes/posts')
const app = require('express')();

app.use('/api/posts', postRouter)

// app.get('/', (req, res)=>{
//     res.status(200).json({"message":"home"})
// })

// app.get('/api', (req, res) => {

//   res.status(200).json({"message":"backend node api test"})

// });


module.exports = app;