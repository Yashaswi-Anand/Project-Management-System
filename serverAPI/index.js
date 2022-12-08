const express = require('express')
const port = 5000
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/mongoose')
const userRoute = require('./routes/userRoute')


// use body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', userRoute)

// secret key for jwt token
app.set('secretKey', "buyofuel")


app.listen(port, function(err){
    if(err) {console.log(err);}
    console.log(`My server is ruuning on: ${port}`);
})