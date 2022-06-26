const mongoose = require('mongoose')

const charSchema = mongoose.Schema(
  {
    charid: {
      type: Number
    },
    character: {
      type: String
    },
    portrayed: {
      type: String
    },
    aka: {
      type: String
    },
    born: {
      type: Date
    },
    partof: {
      type: String
    },
    img: {
      type: String
    },
    occupation: {
      type: String
    }
  }
)


module.exports = mongoose.model('Character', charSchema)