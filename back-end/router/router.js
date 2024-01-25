const express =require('express')
const CreateItem = require('../controller/DeliveryItem')
const getItem = require('../controller/DeliveryItem')
const CreateProduct =require('../controller/product')
const getProduct = require('../controller/product')
const { CreateCollection, getcollection } = require('../controller/Collection')
const signup = require('../controller/signup')
const Login = require('../controller/login')



const router =express.Router()

router.route('/deliveryItem').post(CreateItem)
router.route('/getitems').get(getItem)
router.route('/product').post(CreateProduct)
router.route('/getProduct').get(getProduct)
router.route('/collection').post(CreateCollection)
router.route('/collectionlist').get(getcollection)
router.route('/signup').post(signup)
router.route('/login').post(Login)
module.exports= router