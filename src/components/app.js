import React,{Component} from 'react';
import axios from 'axios';
import BookList from './bookList';

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
      this.setState({books: res.data})
    })
  }

  componentDidMount() {
    this.fetchBooks()
  }

    render() {
        return (
            <div className="jumbotron">
                <BookList books={this.state.books}/> 
            </div>
        );
    }
}