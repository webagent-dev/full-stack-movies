const express = require('express')
const router = express.Router()
const { createMovies, getMovies, getSingleMovies, updateMovies, deleteMovies } = require('../controller/movie.controller')

router.post('/new_movie', createMovies)
router.get('/get_movies', getMovies)
router.get('/get_movies/:id', getSingleMovies)
router.put('/get_movies/:id', updateMovies)
router.delete('/get_movies/:id', deleteMovies)





module.exports = router