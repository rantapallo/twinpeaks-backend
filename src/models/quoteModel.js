const mongoose = require('mongoose')

const quoteSchema = mongoose.Schema(
  {
    quoteid: Number,
    quote: String,
    character: String,
    charid: Number
    // charid: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Character'
    // }
  }
)

module.exports = mongoose.model('Quote', quoteSchema)