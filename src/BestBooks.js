import React from 'react';
import axios from 'axios';
import BooksCarousel from './BooksCarousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  getBooks = async (e) => {
    e.preventDefault();
    try {
      const SERVER = process.env.REACT_APP_SERVER;
      const books = await axios.get(`${SERVER}/books`, { params: { email: user.email } });

      console.log(books.data);

      this.setState({ books: books.data })
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        {this.state.books.length > 0 &&
          <BooksCarousel
            books={this.state.books}
          />
        }

      </>
    )
  }
}

export default BestBooks;