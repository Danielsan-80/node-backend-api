const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const db = require('../db')

db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully")
});


router.get('/', async (req, res)=>{

    
    const posts = await Post.find({}).sort({updatedAt: -1})

    res.status(200).json(posts)

})

router.get('/:id', async(req, res) => {
  const _id  = req.params.id;
  const post = await Post.findById(_id)
  res.status(200).json(post);
});


module.exports = router