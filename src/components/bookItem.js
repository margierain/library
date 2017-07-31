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
    this.setState({isBorrowed:true})
  }

  handleUnborrowing() {
    this.setState({isBorrowed:false})
  }

  renderBorrow() {
    if(!this.state.isBorrowed) {
      return(<td><button onClick={this.handleBorrowing.bind(this)} type="button" className="btn btn-large btn-block btn-default">Borrow and Tweet</button></td>)
      }
      return( <td><button onClick={this.handleUnborrowing.bind(this)} type="button" className="btn btn-large btn-block btn-default">UnBorrow</button></td>)
  }


  render() {
    return (
      <tr>
        <td>{this.props.author}</td>
        <td>{this.props.title}</td>
        {this.renderBorrow()}
      </tr>
    );
  }
}