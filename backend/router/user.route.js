const express = require('express')
const Router = express.Router()
const { getUser, updateUser, getSingleUser, deleteUser } = require('../controller/user.controller')
const { verifyToken } = require('../middleware/verifyToken')

Router.get('/user', getUser)
Router.get('/user/:id', getSingleUser)
Router.put('/user/:id',verifyToken, updateUser)
Router.delete('/user/:id', deleteUser)


module.exports = Router