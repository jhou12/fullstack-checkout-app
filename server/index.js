const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.SERVER || 3000
const db = require('../database/mongo.js')

app.use(express.static('client/dist'))
app.use(express.json())
app.use(express.urlencoded())

app.get('/connect', (req, res) => {
  res.send('server connected!')
})

app.get('/id', (req, res) => {
  db.makeId(function(err, data) {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/forms', (req, res) => {
  console.log('REQ BODY', req.body)
  db.saveForm(req.body, function(err, data) {
    if (err) {
      console.log(err)
    } else {
      res.send('saved!')
    }
  })
})

app.post('/confirm', (req, res) => {
  console.log('got id?', req.body)
  db.confirm(req.body, function(err, data) {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})
