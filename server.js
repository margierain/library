const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const router = require('./server/routes');
const Twitter = require('twitter-js-client').Twitter;
require('dotenv').config()
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://Maggie:assess@ds127983.mlab.com:27983/borrow');
app.use('/api/v1', router)

const config = {
  consumer_key: process.env.consumerKey,
  consumer_secret: process.env.consumerSecret,
  access_token_key: process.env.accessTokenSecret,
  access_token_secret: process.env.accessTokenKey
}

const twitter = new Twitter(config);

app.listen(port, () => {
  console.log(`API live at port ${port}`)
})

module.exports = twitter;