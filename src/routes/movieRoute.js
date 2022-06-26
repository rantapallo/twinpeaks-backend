const express = require('express')
const router = express.Router()
const {getMovie, getMovies} = require('../controllers/movieController')


router.get('/', getMovies)
router.get('/:no', getMovie)


module.exports = router