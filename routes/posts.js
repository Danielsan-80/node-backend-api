const express = require('express')
const router = express.Router()
require ('dotenv').config()
const mongoose = require('mongoose')
const Post = require('../models/Post')

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{

  console.log('connected to mongodb')

  router.get('/', async (req, res)=>{
    const posts = await Post.find({}).populate('author').sort({updatedAt: -1})

    res.status(200).json(posts)

})

router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  res.status(200).json({"post": slug});
});

})


module.exports = router