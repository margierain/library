const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const router = require('./server/routes');
const Twitter = require('twitter-js-client').Twitter;

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://Maggie:assess@ds127983.mlab.com:27983/borrow');
app.use('/api/v1', router)

const config = {
  consumer_key: '0gaECfOWoARZuNZWykkPHwZ4R',
  consumer_secret: 'bD8etj6xTeaIEJXZKRE4UM09UYS1cRSBKIHmJ0Ayb7pSN3492R',
  access_token_key: '3259891293-CqNVE3VWtNu2nsWqulWxvBUykHqyAWDHfKH9skE',
  access_token_secret: '0FokCMZ3kVjZn0571N8nkxSjQOWTzEH8DdVRGwtAgmIX2'
};

const twitter = new Twitter(config);

app.listen(port, () => {
  console.log(`API live at port ${port}`)
})

module.exports = twitter;