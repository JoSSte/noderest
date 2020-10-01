require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { promisify } = require('util')

const authMiddleware = require('./auth')
const initializeDatabase = require('./database')
const jsonErrorHandler = async (err, req, res, next) => {
  res.status(500).send({ error: err })
}

const app = express()
app.use(bodyParser.json())
app.use(authMiddleware)
app.use(jsonErrorHandler)

const startServer = async () => {
  await initializeDatabase(app)
  const port = process.env.SERVER_PORT || 3000
  await promisify(app.listen).bind(app)(port)
  console.log(`Listening on port ${port}`)
}

startServer()
