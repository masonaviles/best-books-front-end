import React from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import BooksCarousel from './BooksCarousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
    const {
      isAuthenticated,
      user
    } = useAuth0();
  
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