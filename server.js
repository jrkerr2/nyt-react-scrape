var express = require('express')
var mongoose = require('mongoose')
var request = require('request')


// mongoose.connect('path')

var app = express()

var port = process.env.PORT || 3000


app.use(express.static('./client/build'))


app.get('/scrape', function(req, res){
  request('https://www.nytimes.com/', function(error, response, body){
    res.send(body)
    // use cheerio to scrape
  })
})


app.listen(port)
