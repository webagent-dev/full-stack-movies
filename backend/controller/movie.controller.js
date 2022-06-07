const Movie = require('../model/movie.model')
// create Movies
const createMovies = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const newMovie = await Movie.create(req.body)
            res.status(201).json(newMovie)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you can't add movies")
    }
}
// get  randomly
const getMovies = async (req, res) => {
    const type = req.query.type 
    let listMovie
    try {
        if (type === 'series') {
            listMovie = await Movie.aggregate([
                { $match: { isSeries: true } },
                {$sample: {size: 1}}
           ])
        } else {
            listMovie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: {size: 1} }
            ])
       }
          res.status(200) .json(listMovie) 
    } catch (err) {
        res.status(500).json(err)
    }
}
//  get all Movies
const getAllMovies = async (req, res) => {
    if (req.user.isAdmin) {
          try {
         const allMovie =   await Movie.find()
              res.status(200).json(allMovie.reverse())
    } catch (err) {
        res.status(500).json(err)
    }
    } else {
        res.status(403).json("you can't delete video")
    }
}
// get single Movies
const getSingleMovies = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json(movie)
    }catch (err){
        res.status(500).json(err)
    }
}
// update Movies
const updateMovies = async (req, res) => {
    if (req.user.isAdmin) {
         try {
             const updateMovie = await Movie.findByIdAndUpdate(
                 req.params.id,
                 { $set: req.body },
                 { new: true, runValidators: true }
             )
             res.status(200).json(updateMovie)
    } catch (err) {
        res.status(500).json(err)
    }
    } else {
        res.status(403).json(" you can't update movies")
    }
}
// delete Movies
const deleteMovies = async (req, res) => {
    if (req.user.isAdmin) {
          try {
            await Movie.findByIdAndDelete(req.params.id)
              res.status(200).json('movies deleted')
    } catch (err) {
        res.status(500).json(err)
    }
    } else {
        res.status(403).json("you can't delete video")
    }
}


module.exports = { createMovies, getMovies, getSingleMovies, updateMovies, deleteMovies, getAllMovies}