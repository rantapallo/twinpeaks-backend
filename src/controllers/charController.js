const Character = require('../models/charModel')

const getCharacters = (req, res) => {
  Character.find()
    .then((data) => {
      let result = data.map((char) => {
        return ({
          charid: char.charid, 
          character: char.character, 
          portrayed: char.portrayed, 
          img: char.img, 
          partof: char.partof,
          occupation: char.occupation, 
          aka: char.aka, 
          born: char.born, 
          appearances: char.appearances
        })
      })
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

const getCharacterById = (req, res) => {
  Character.find({charid: req.params.id})
    .then((data) => {
      let result = data.map((char) => {
        return ({
          charid: char.charid, 
          character: char.character, 
          portrayed: char.portrayed, 
          img: char.img, 
          partof: char.partof,
          occupation: char.occupation, 
          aka: char.aka, 
          born: char.born, 
          appearances: char.appearances
        })
      })
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

const getCharacterByName = (req, res) => {
  const regex = new RegExp(req.params.name, 'i')
  Character.find({character: {$regex: regex}})
    .then((data) => {
      let result = data.map((char) => {
        return ({
          charid: char.charid, 
          character: char.character, 
          portrayed: char.portrayed, 
          img: char.img, 
          partof: char.partof,
          occupation: char.occupation, 
          aka: char.aka, 
          born: char.born, 
          appearances: char.appearances
        })
      })
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