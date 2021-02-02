const router = require('express').Router()

const {asinControllers} = require('../../controllers')

router.post('/', asinControllers.create)
router.get('/:asin', asinControllers.get)
router.patch('/', asinControllers.update)
router.delete('/', asinControllers.delete)

module.exports = router

