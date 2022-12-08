const express = require('express')
const { signup, login } = require('../controller/userController')
const route = express.Router()

// user signup
route.post('/signup', signup)
// user login
route.post('/login', login)


module.exports = route