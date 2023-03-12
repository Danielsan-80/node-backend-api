const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const mongoose = require('mongoose')
require ('dotenv').config()

  router.get('/', async (req, res)=>{
    mongoose.connect(process.env.MONGODB_URI)

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully")

    
});

    const posts = await Post.find({}).populate('author').sort({updatedAt: -1})

    res.status(200).json(posts)

})

router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  res.status(200).json({"post": slug});
});


module.exports = router