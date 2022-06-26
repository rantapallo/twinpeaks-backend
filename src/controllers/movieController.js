const Movie = require('../models/movieModel')

const getMovies = (req, res) => {
  
  Movie.find().sort('no')
    .then((data) => {
      let result = data.map((movie) => {
        return ({
          no: movie.no, 
          title: movie.title, 
          directed: movie.directed, 
          written: movie.written, 
          release_date: movie.release_date,
          summary: movie.summary
        })
      })
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
    })
}

const getMovie = (req, res) => {
  
  Movie.find({no: req.params.no})
    .then((data) => {
      let result = data.map((movie) => {
        return ({
          no: movie.no, 
          title: movie.title, 
          directed: movie.directed, 
          written: movie.written, 
          release_date: movie.release_date,
          summary: movie.summary
        })
      })
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  getMovies,
  getMovie
}