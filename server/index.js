const quotes = require('./src/quotes')

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

function getRandomQuote() {
  return  quotes[Math.floor(Math.random() * quotes.length)]
}

app.use(cors())

app.get('/quotes/random', (req, res) => {
  res.json(getRandomQuote())
  console.log(req.headers['user-agent']);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})