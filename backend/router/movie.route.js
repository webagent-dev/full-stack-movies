const express = require('express')
const router = express.Router()
const { createMovies, getMovies, getSingleMovies, updateMovies, deleteMovies, getAllMovies } = require('../controller/movie.controller')
const { verifyToken } = require('../middleware/verifyToken')

router.post('/new_movie', verifyToken, createMovies)
router.get('/get_movies', getMovies)
router.get('/get_all_movies',verifyToken, getAllMovies)
router.get('/get_movies/:id', getSingleMovies)
router.put('/get_movies/:id',verifyToken,updateMovies)
router.delete('/get_movies/:id', verifyToken,deleteMovies)





module.exports = router