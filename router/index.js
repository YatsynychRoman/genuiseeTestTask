const router = require('express').Router()
const asinRouter = require('./asin.router')

router.use('/asin', asinRouter)

module.exports = router
