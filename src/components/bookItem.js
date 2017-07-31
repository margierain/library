import React, { Component } from 'react';

export default class BookListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isBorrowed:false
    }
  }
  handleBorrowing() {
    const title = this.props.title;
    const author = this.props.author
    this.props.tweetBook({title: title, author:author})
  }


  render() {
    return (
      <tr>
        <td>{this.props.author}</td>
        <td>{this.props.title}</td>
        <td><button onClick={this.handleBorrowing.bind(this)} type="button" className="btn btn-large btn-block btn-default">Borrow and Tweet</button></td>
      </tr>
    );
  }
}