const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/characters', require('./routes/charRoute'))
app.use('/api/quotes', require('./routes/quoteRoute'))

app.listen(port, () => console.log(`Server started on port ${port}`))