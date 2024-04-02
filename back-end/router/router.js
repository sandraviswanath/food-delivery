const express =require('express')
// const CreateItem = require('../controller/DeliveryItem')
// const getItem = require('../controller/DeliveryItem')

const { CreateCollection, getcollection } = require('../controller/Collection')
const { Createfood, getfood,updatefood,deletefood } = require('../controller/food')
const {signup,getsignup} = require('../controller/signup')
const Login = require('../controller/login')
const getonePlace = require('../controller/getplace')
const GetOneproduct = require('../controller/GetoneProduct')
const { CreateCart, getCart, updateCart, deleteCart} = require('../controller/Cart')
// const { orderdata,myorderdata } = require('../controller/order')
const { Createfooditems,getfooditems } = require('../controller/fooditem')
const { getCustomersignup, Customersignup } = require('../controller/CustomerSignup')
const token = require('../Midllewares/Token')
const CustomerLogin = require('../controller/Customerlogin')



const router =express.Router()

// router.route('/deliveryItem').post(CreateItem)
// router.route('/getitems').get(getItem)

router.route('/collection').post(CreateCollection)
router.route('/collectionlist').get(getcollection)
router.route('/getplace/:place').get(getonePlace)
router.route('/getproduct/:id').get(GetOneproduct)
router.route('/signup').post(signup)
router.route('/signup').post(getsignup)
router.route('/login').post(Login)
router.route('/food').post(Createfood)
router.route('/foodlist').get(getfood)
router.route('/updatefood/:id').put(updatefood)
router.route('/delete/:id').delete(deletefood)

router.route('/createcart').post(CreateCart)
router.route('/getcart/:email').get(getCart)
// router.route('/getcart').get(getCart)
router.route('/updatecart/:id').patch(updateCart)
router.route('/deletecart/:id/:email').delete(deleteCart)

// router.route('/orderdata').post(orderdata)

router.route('/createfooditems').post(Createfooditems)
router.route('/getfooditems').get(getfooditems)
router.route('/getcustomersignup').get(getCustomersignup)
router.route('/customersignup').post(Customersignup)
router.route('/customerlogin').post(CustomerLogin)



module.exports= router