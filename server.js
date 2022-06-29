const express = require('express')
const app = express()
const port = 3000

const game = require('./game.js')

app.get('/game/start', (req, res) => {
  res.json(game.start())
})

app.get('/*', (req, res) => {
  res.send(" Hey Visit a url:-   /game/start")
})
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})