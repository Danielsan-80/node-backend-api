const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')
const db = require('../db')

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully")
});


router.get('/', async (req, res)=>{

    try {
      const posts = await Post.find({}).populate('author').sort({updatedAt: -1})
      res.status(200).json(posts)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
    

})

router.post('/search', async (req, res)=>{
  try {
      
      let searchTerm = req.body.searchTerm
      const searchPurified = searchTerm.replace(/^a-zA-Z0-9 ]/g, '')

      const posts = await Post.find({
          $or: [
              {title: {$regex: new RegExp(searchPurified, 'i')} },
              {body: {$regex: new RegExp(searchPurified, 'i')} },
          ]
      }).populate('author')

      if(posts.length<1){
          throw Error('your search produced no results')
      }
      res.status(200).json(posts)
      
  } catch (error) {
      res.status(404).json({error: error.message})
      console.log(error)
  }
})

router.get('/:id', async(req, res) => {
  const _id  = req.params.id;

  try {
    const post = await Post.findById(_id).populate('author')
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({error: error.message})
  }
  
});

router.post('/', async(req, res)=>{
  const {title, body, category, tags, email} = req.body
  
  
    try {

      const img = req.files?.featuredImg || {}
        // if(!featuredImg){
        //     featuredImg = {}
        // }

        if(img?.size > 150000){
            throw Error('image files must be under 150kb')
        }
        const user = await User.findOne({email})
        const authorId = user._id
        const post = await Post.create({title, body, featuredImg:img.data, category, tags, author: authorId})
        await User.findByIdAndUpdate(authorId, {$push: {posts: post._id}})
        res.status(200).json({message: 'post created'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.put('/:id', async(req, res)=>{
    const _id = req.params.id
    const {title, body, category, tags} = req.body

    try {
        const post = await Post.findByIdAndUpdate(_id, {title, body, category, tags})
        res.status(200).json({message: 'post updated'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id', async(req, res)=>{
  const _id = req.params.id

    try {
        const post = await Post.findByIdAndDelete(_id)
        res.status(200).json({message: "post deleted"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router