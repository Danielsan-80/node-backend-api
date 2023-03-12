const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    posts: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
        }
    ]


}, {timestamps: true})

// userSchema.statics.register = async function(name, email, password) {

//     if(!name || !email || !password) {
//         throw Error('compilare tutti i campi del modulo')
//     }

//     if(!validator.isEmail(email)){
//         throw Error('inserire un indirizzo email valido')
//     }

//     if(!validator.isStrongPassword(password)){
//         throw Error('le password devono contenere un misto di caratteri alfanumerici e simboli')
//     }

//     const exists = await this.findOne({email})

//     if(exists) {
//         throw Error('questo utente è già presente nel nostro database')
//     }

//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(password, salt)

//     const user = await this.create({name, email, password: hash})

//     return user
// }

// userSchema.statics.login = async function(email, password) {

//     if(!email || !password) {
//         throw Error('compilare tutti i campi del modulo')
//     }

//     const user = await this.findOne({email})

//     if(!user) {
//         throw Error('questo utente non è presente nel nostro database')
//     }

//     const match = await bcrypt.compare(password, user.password)

//     if(!match) {
//         throw Error('password non corretta')
//     }

//     return user
// }

module.exports = mongoose.model('User', userSchema)