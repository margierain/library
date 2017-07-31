import React, { Component } from 'react';

export default class BookListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isBorrowed:false
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.author}</td>
        <td>{this.props.title}</td>
      </tr>
    );
  }
}