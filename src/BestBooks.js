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

  async componentDidMount() {
    // getBooks = async () => {
    console.log('inside getbooks');
    try {
      const SERVER = process.env.REACT_APP_SERVER || 'http://localhost:3001';
      const books = await axios.get(`${SERVER}/books`, { params: { email: this.props.auth0.user.email } });

      console.log('books: ', books);
      console.log('try block user auth0', this.props.auth0.user);

      this.setState({ books: books.data });
    } catch (error) {
      console.error(error);
    }
    // };
  }

  render() {
    console.log('user auth0', this.props.auth0.user.email);
    console.log('best boooks', this.state.books);
    return (
      <>

        <BooksCarousel
          books={this.state.books}
        />


      </>
    );
  }
}

export default withAuth0(BestBooks);
