const mongoose = require('mongoose')

const movieSchema = mongoose.Schema(
  {
    no: Number,
    title: String,
    directed: [String],
    written: [String],
    release_date: Date,
    summary: String
  }
)

module.exports = mongoose.model('Movie', movieSchema)