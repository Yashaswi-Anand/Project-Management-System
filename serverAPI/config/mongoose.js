const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/buyofuelDB')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error to connection'))

db.once('open', function(){
    console.log("Database is connected...");
})

module.exports = db