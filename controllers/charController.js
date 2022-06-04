const Character = require('../models/charModel')

const getCharacters = (req, res) => {
  Character.find()
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

const getCharacterById = (req, res) => {
  Character.find({charid: req.params.id})
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

const getCharacterByName = (req, res) => {
  const regex = new RegExp(req.query.char, 'i')
  Character.find({character: {$regex: regex}})
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  getCharacters,
  getCharacterById,
  getCharacterByName
}