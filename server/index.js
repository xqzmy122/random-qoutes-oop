const quotes = require('./src/quotes')

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const corsOptions = {
  origin: 'http://127.0.0.1:8080',
}

function getRandomQuote() {
  return  quotes[Math.floor(Math.random() * quotes.length)]
}

app.use(cors(corsOptions))

app.get('/quotes/random', (req, res) => {
  res.json(getRandomQuote())
  console.log(req.headers['user-agent']);
})

app.get('/quotes', (req, res) => {
  res.json(quotes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})