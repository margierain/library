const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookModel = new Schema({
  title: {type:String, required: true, unique:true},
  author: {type: String},
  isBorrowed: {type:Boolean, default:false}
})

module.exports = mongoose.model('BookModel', BookModel)