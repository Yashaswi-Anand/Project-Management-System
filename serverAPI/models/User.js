const mongoose = require('mongoose')
 
const userSChema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSChema);

module.exports = User
