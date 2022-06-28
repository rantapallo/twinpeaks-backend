const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors')
const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/characters', require('./routes/charRoute'))
app.use('/api/quotes', require('./routes/quoteRoute'))
app.use('/api/episodes', require('./routes/episodeRoute'))
app.use('/api/movies', require('./routes/movieRoute'))

app.listen(port, () => console.log(`Server started on port ${port}`))