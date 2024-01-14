const express=require('express');
const connection = require('./config/Mongo');


const app=express()
const dotenv=require('dotenv')
const cors =require('cors');
const router = require('./router/router');
connection()
app.use(express.json())
app.use(cors())
dotenv.config()
app.use('/',router)

const PORT=process.env.PORT||5000
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))