const express = require('express');
const BookModel = require('../models/book');
const axios = require('axios');
const router = express.Router();
const OAuth = require('oauth');
require('dotenv').config();

router.get('/', (req,res) => {
  res.send('API intialized')
})

const data = {
    "consumer_key": process.env.consumerKey,
    "consumer_secret": process.env.consumerSecret,
    "token": process.env.accessTokenKey,
    "token_secret": process.env.accessTokenSecret
}


router.route('/books')
  .get((req, res) => {
    BookModel.find((err, books) => {
      if(err) return res.send(err)
        res.json(books)
    })
  })


  .post((req,res) => {
    const book = new BookModel();
    book.title = req.body.title;
    book.author = req.body.author;
    book.isBorrowed = req.body.isBorrowed;
    book.save((err, books) => {
      if(err) return res.send(err)
        res.json({message: 'Book saved', books})
    })


  const oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
        process.env.consumerKey,
        process.env.consumerSecret,
        '1.0A',
        null,
        'HMAC-SHA1'
    );

const url = "https://api.twitter.com/1.1/statuses/update.json"
    oauth.post(
      url,
      process.env.accessTokenKey,
      process.env.accessTokenSecret,
      {status: `hey borrowed this ${book.title}`},
      "application/x-www-form-urlencoded",
      function (e, data, res){
        if (e) console.log("e---->", e);
        console.log("here---->", require('util').inspect(data));
      });
  })

module.exports = router
