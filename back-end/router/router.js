const express =require('express')
const CreateItem = require('../controller/DeliveryItem')
const getItem = require('../controller/DeliveryItem')
const CreateProduct =require('../controller/product')
const getProduct = require('../controller/product')
const { CreateCollection, getcollection } = require('../controller/Collection')
const { Createfood, getfood } = require('../controller/food')
const signup = require('../controller/signup')
const Login = require('../controller/login')
const getonePlace = require('../controller/getplace')
const GetOneproduct = require('../controller/GetoneProduct')
const { CreateCart, getCart, updateCart, deleteCart, } = require('../controller/Cart')
const { orderdata,myorderdata } = require('../controller/order')
const { Createfooditems,getfooditems } = require('../controller/fooditem')




const router =express.Router()

router.route('/deliveryItem').post(CreateItem)
router.route('/getitems').get(getItem)
router.route('/product').post(CreateProduct)
router.route('/getProduct').get(getProduct)
router.route('/collection').post(CreateCollection)
router.route('/collectionlist').get(getcollection)
router.route('/getplace/:place').get(getonePlace)
router.route('/getproduct/:id').get(GetOneproduct)
router.route('/signup').post(signup)
router.route('/login').post(Login)
router.route('/food').post(Createfood)
router.route('/foodlist').get(getfood)
router.route('/createcart').post(CreateCart)
router.route('/getcart').get(getCart)
router.route('/updatecart/:id').patch(updateCart)
router.route('/deletecart/:id').delete(deleteCart)
router.route('/orderdata').post(orderdata)
router.route('/myorderdata').post(myorderdata)
router.route('/createfooditems').post(Createfooditems)
router.route('/getfooditems').get(getfooditems)



module.exports= router