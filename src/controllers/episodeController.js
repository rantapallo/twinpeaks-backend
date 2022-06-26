const Episode = require('../models/episodeModel')

const getEpisodes = (req, res) => {
  
  Episode.find().sort('episode')
    .then((data) => (
      res.status(200).json(data)
    ))
    .catch(err => {
      console.log(err)
    })
}

const getEpisode = (req, res) => {
  
  Episode.find({episode: req.params.no}).sort('episode')
    .then((data) => (
      res.status(200).json(data)
    ))
    .catch(err => {
      console.log(err)
    })
}

const getSeason = (req, res) => {
  Episode.find({season: req.params.no}).sort('episode')
    .then((data) => (
      res.status(200).json(data)
    ))
    .catch(err => {
      console.log(err)
    })
}

const getSeasonEpisode = (req, res) => {
  let season = req.params.season
  let no_in_season = req.params.episode
  Episode.find({season, no_in_season}).sort('episode')
    .then((data) => (
        res.status(200).json(data)
      ))
  .catch(err => {
    console.log(err)
  })
}

module.exports = {
  getEpisodes,
  getEpisode,
  getSeason,
  getSeasonEpisode
  
}