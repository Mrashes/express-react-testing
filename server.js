const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
// const request = require('request');
// const moment = require('moment');

const apiKey = '0a1ba0538e40bc2e35caba7852e08e7c'

var port = process.env.PORT || 3000

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function (req, res){
	res.render('landing');
})

app.get('/react', function (req, res){
	res.render('index');
})

// app.post('/', function (req, res) {
	
// })

//waiting for you to ping
app.listen(port, function () {
	console.log('Example app listening on port ' + port + '!');
})