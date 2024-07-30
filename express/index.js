const express = require('express')
const app = express()
const breeds = require('./data.js')
const cors = require('cors')
const port = 4000

app.use(cors())

app.get('/breeds', (req, res) => {
  res.json(breeds)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
