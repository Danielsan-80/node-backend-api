const express = require('express')
const router = express.Router()
require ('dotenv').config()
const Post = require('../models/Post')

  router.get('/', async (req, res)=>{
    const posts = await Post.find({}).populate('author').sort({updatedAt: -1})

    res.status(200).json(posts)

})

router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  res.status(200).json({"post": slug});
});


module.exports = router