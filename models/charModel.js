const mongoose = require('mongoose')
mongoose.set('debug', true);

const charSchema = mongoose.Schema(
  {
    charid: Number,
    character: String,
    actor: String,
    aka: String,
    born: Date,
    partof: String,
    img: String,
    occupation: String,
    appearances: {
      "Season 1": [
        Number
      ],
      "Season 2": [
        Number
      ],
      "Season 3": [
        Number
      ]
    }
  }
)

module.exports = mongoose.model('Character', charSchema)