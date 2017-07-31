const express = require('express');
const BookModel = require('../models/book');
const axios = require('axios');
const router = express.Router();

router.get('/', (req,res) => {
  res.send('API intialized')
})

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

    axios.post(`https://api.twitter.com/1.1/statuses/update.json?status=${book.title}`)
  })

module.exports = router