const express = require('express')
const router = express.Router()
const {getRandomQuote, getRandomQuoteByChar} = require('../controllers/quoteController')

router.get('/', getRandomQuote)
router.get('/char/:id', getRandomQuoteByChar)

module.exports = router