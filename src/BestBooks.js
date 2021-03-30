import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BooksCarousel from './BooksCarousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    // const user = this.props.auth0;
  }

  getBooks = async (e) => {
    e.preventDefault();
    try {
      const SERVER = process.env.REACT_APP_SERVER;
      const books = await axios.get(`${SERVER}/books`, { params: { email: this.props.auth0.user.email } });

      console.log(books.data);
      console.log('try block user auth0', this.props.auth0.user);

      this.setState({ books: books.data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log('user auth0', this.props.auth0.user.email);
    console.log('best boooks', this.state.books);
    return (
      <>
        {this.state.books.length > 0 &&
          <BooksCarousel
            books={this.state.books}
          />
        }

      </>
    );
  }
}

export default withAuth0(BestBooks);
