const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).json({"posts":"all posts"})

})

router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  res.status(200).json({"post": slug});
});

module.exports = router