const express = require('express')
const Router = express.Router()
const {updateUser, getSingleUser, deleteUser } = require('../controller/user.controller')

Router.get('/user', getSingleUser)
Router.patch('/user', updateUser)
Router.delete('/user', deleteUser)


module.exports = Router