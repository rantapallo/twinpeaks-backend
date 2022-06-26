const express = require('express')
const router = express.Router()
const {getEpisode, getEpisodes, getSeason, getSeasonEpisode} = require('../controllers/episodeController')



router.get('/episode/:no', getEpisode)
router.get('/season/:season/episode/:episode', getSeasonEpisode)
router.get('/season/:no', getSeason)
router.get('/', getEpisodes)


module.exports = router