const express = require('express')

const routes = express.Router()

routes.get('/', async (req, res) => {
  const ProductionStatus = require('./database/models/ProductionStatus')
  const list = await ProductionStatus.findAll().catch(e => {
    console.error(e)
  })
  res.status(200).json(list)
})

module.exports = routes