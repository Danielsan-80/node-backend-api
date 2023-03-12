const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    category: {
        type: String
    },

    tags: [String],


}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema)