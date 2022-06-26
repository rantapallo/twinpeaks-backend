const mongoose = require('mongoose')

const episodeSchema = mongoose.Schema(
  {
    episode: Number,
    season: Number,
    no_in_season: Number,
    title: String,
    title_additional: String,
    directed: [String],
    written: [String],
    original_air_date: Date,
    summary: String
  }
)

module.exports = mongoose.model('Episode', episodeSchema)