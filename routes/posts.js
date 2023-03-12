const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const db = require('../db')

  router.get('/', async (req, res)=>{

    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully")
});

    const posts = await Post.find({}).sort({updatedAt: -1})

    res.status(200).json(posts)

})

router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  res.status(200).json({"post": slug});
});


module.exports = router