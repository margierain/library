import React, { Component } from 'react';
import axios from 'axios';
import BookList from './bookList';
import cors from 'cors';

 const headerCors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Request-Method": "POST,GET,OPTIONS,PUT",
      "Access-Control-Allow-Credentials":"true" ,
      "Access-Control-Allow-Headers":"Origin,Accept, X-Requested-With, Content-Type "}

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
    axios.post(this.props.url, book)
    .catch(err => {
        console.log(err)
      })

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

