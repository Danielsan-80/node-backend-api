const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const db = require('../db')

const createToken = (_id) =>{
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
}

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully")
});


router.post('/register', async (req, res)=>{

    const {name, email, password} = req.body

    try {
      const user = await User.register(name, email, password)
      const token = createToken(user._id)
      res.status(201).json({name, email, token})
      
    } catch (error) {
      res.status(400).json({error: error.message})
    }
})

module.exports = router