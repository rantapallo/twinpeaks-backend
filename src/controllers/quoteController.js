const Quote = require('../models/quoteModel')

const getRandomQuote = (req, res) => {
  Quote.countDocuments({})
    .then((count) => {
      const random = Math.floor((Math.random() * count) + 1)
      Quote.findOne({quoteid: random})
        .then((result) => {
          res.status(200).json({
            "quote": result.quote, 
            "character": result.character
          })
        })
        .catch((err) => {
          console.log(err)
        })
    })
}

const getRandomQuoteByChar = (req, res) => {
  Quote.find({charid: req.params.id})
    .then((results) => {
      let countResults = results.length
      let random = Math.floor((Math.random() * countResults))
      let randomQuote = results[random]
      res.status(200).json({
        "quote": randomQuote.quote,
        "character": randomQuote.character
      })
    })
    .catch((err) => {
      console.log(err)
    })
    
}

module.exports = {
  getRandomQuote,
  getRandomQuoteByChar
}