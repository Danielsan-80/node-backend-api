const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')
const db = require('../db')

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully")
});


router.get('/', (req, res)=>{
    res.status(200).json({"message":"user router ok"})
})

