const Movie = require('../models/movieModel')

const getMovies = (req, res) => {
  
  Movie.find().sort('no')
    .then((data) => (
      res.status(200).json(data)
    ))
    .catch(err => {
      console.log(err)
    })
}

const getMovie = (req, res) => {
  
  Movie.find({no: req.params.no})
    .then((data) => (
      res.status(200).json(data)
    ))
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  getMovies,
  getMovie
}