// create Movies
const createMovies = async (req, res) => {
    try {
        res.status(200) .json('we are creating new movie')
    } catch (err) {
        res.status(500).json(err)
    }
}
// get Movies
const getMovies = async (req, res) => {
    try {
          res.status(200) .json('we are getting movie') 
    } catch (err) {
        res.status(500).json(err)
    }
}
// get single Movies
const getSingleMovies = async (req, res) => {
    try {
              res.status(200) .json('we are getting single movie')
    } catch (err) {
        res.status(500).json(err)
    }
}
// update Movies
const updateMovies = async (req, res) => {
    try {
              res.status(200) .json('we are updating  movie')
    } catch (err) {
        res.status(500).json(err)
    }
}
// delete Movies
const deleteMovies = async (req, res) => {
    try {
       res.status(200) .json('we are deleting movie')   
    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports = { createMovies, getMovies, getSingleMovies, updateMovies, deleteMovies}