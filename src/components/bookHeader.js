import React, { Component } from 'react';

export default class BookHeaders extends Component {

  render() {
    return (
      <thead>
        <tr>
          <th>Author</th>
          <th>Book Title</th>
          <th>Borrow</th>
        </tr>
      </thead>
    );
  }
}