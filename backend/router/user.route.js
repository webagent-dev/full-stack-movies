const express = require('express')
const Router = express.Router()
const { getUser, updateUser, getSingleUser, deleteUser, getUserStat } = require('../controller/user.controller')
const { verifyToken } = require('../middleware/verifyToken')

Router.get('/user', verifyToken, getUser)
Router.get('/user/:id',verifyToken, getSingleUser)
Router.put('/user/:id',verifyToken, updateUser)
Router.delete('/user/:id', verifyToken, deleteUser)
Router.get('/user_stats',verifyToken, getUserStat)


module.exports = Router