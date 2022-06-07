const mongoose = require('mongoose')

const quoteSchema = mongoose.Schema(
  {
    quoteid: Number,
    quote: String,
    character: String,
    charid: Number
  }
)

module.exports = mongoose.model('Quote', quoteSchema)