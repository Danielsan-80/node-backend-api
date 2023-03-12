const postRouter = require('../routes/posts')
const app = require('express')();
const mongoose = require('mongoose')
require ('dotenv').config()

app.use('/api/posts', postRouter)

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = app;