const express = require('express')
const router = express.Router()
const {getCharacters, getCharacterByName, getCharacterById} = require('../controllers/charController')

router.get('/name', getCharacterByName)
router.get('/:id', getCharacterById)
router.get('/', getCharacters)


module.exports = router