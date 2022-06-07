const express = require('express')
const Router = express.Router()
const { createList, getSingleList, getList, updateList, deleteList } = require('../controller/list.controller')
const { verifyToken } = require('../middleware/verifyToken')


Router.post('/create_list', verifyToken, createList)
Router.get('/get_list', getList)
Router.get('/get_list/:id', getSingleList)
Router.put('/get_list/:id', verifyToken, updateList)
Router.delete('/get_list/:id',verifyToken, deleteList)



module.exports = Router