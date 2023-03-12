const mongoose = require('mongoose')
const User = require('./User')

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

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }


}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema)