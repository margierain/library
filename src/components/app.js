import React, { Component } from 'react';
import axios from 'axios';
import BookList from './bookList';
import cors from 'cors';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  fetchBooks() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ books: res.data })
      })
  }

  componentDidMount() {
    this.fetchBooks()
  }

  tweetBook(book) {
    console.log(book)
    axios.post(`https://api.twitter.com/1.1/statuses/update.json?status=${book.title}`,
     {headers: { "Access-Control-Allow-Origin": "*" }})

  }

  render() {
    return (
      <div className="jumbotron">
        <BookList books={this.state.books}
          tweetBook={this.tweetBook.bind(this)} />
      </div>
    );
  }
}
const config = {
  consumer_key: process.env.consumerKey,
  consumer_secret: process.env.consumerSecret,
  access_token_key: process.env.accessTokenSecret,
  access_token_secret: process.env.accessTokenKey
}

