const express =require('express')
const CreateItem = require('../controller/DeliveryItem')
const getItem = require('../controller/DeliveryItem')

const router =express.Router()

router.route('/deliveryItem').post(CreateItem)
router.route('/getitems').get(getItem)
router.route('/product').post()
module.exports= router