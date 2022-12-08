const express = require('express')
const port = 5000
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/mongoose')
const userRoute = require('./routes/userRoute')
const projectRoute = require('./routes/projectRoutes')

// use body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// user routes
app.use('/', userRoute)
// project routes
app.use('/', projectRoute)

// secret key for jwt token
app.set('secretKey', "buyofuel")

// app listen
app.listen(port, function(err){
    if(err) {console.log(err);}
    console.log(`My server is ruuning on: ${port}`);
})