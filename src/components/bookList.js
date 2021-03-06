import _ from 'lodash';
import React,{Component} from 'react';
import BookHeader from './bookHeader';
import BookListItem from './bookItem';

export default class BookList extends Component {

    renderBooks() {
      const props = _.omit(this.props, 'books')
      return _.map(this.props.books, (book, index) =>
      <BookListItem key={index} {...book} {...props}/>)
    }
    render() {
        return (
            <div className="class-name">
                <table className="table table-hover">
                  <BookHeader />
                  <tbody>
                   {this.renderBooks()}
                  </tbody>
                </table>
            </div>
        );
    }
}