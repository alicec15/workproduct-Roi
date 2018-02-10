const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, '../public')))
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})
app.use((err, req, res, next) => {
  res.status(500).send(err.message || 'Internal server error')
})
app.listen(PORT, () => console.log('listening on port ', PORT))