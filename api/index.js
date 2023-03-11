const app = require('express')();

app.get('/', (req, res)=>{
    res.status(200).json({"message":"home"})
})

app.get('/api', (req, res) => {

  res.status(200).json({"message":"backend node api test"})

});


app.get('/api/:slug', (req, res) => {

  const { slug } = req.params;

  res.status(200).json({"Item": slug});

});


module.exports = app;