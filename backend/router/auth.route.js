const express = require('express')
const Router = express.Router()
const { registerUser, loginUser } = require('../controller/auth.controller')

Router.post('/register_user', registerUser)
Router.post('/login_user', loginUser)


module.exports = Router