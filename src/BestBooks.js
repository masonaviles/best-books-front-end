import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
// import BooksCarousel from './BooksCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

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
    // console.log('inside getbooks');
    try {
      const SERVER = process.env.REACT_APP_SERVER || 'http://localhost:3001';
      const bookReader = await axios.get(`${SERVER}/books`, { params: { email: this.props.auth0.user.email } });

      console.log('books: ', bookReader.data.books);
      // console.log('try block user auth0', this.props.auth0.user);

      this.setState({ books: bookReader.data.books });
    } catch (error) {
      console.error(error);
    }
    // };
  }

  render() {
    let booksData = this.state.books;
    console.log('user auth0', this.props.auth0.user.email);
    // console.log('best boooks', this.state.books);
    return (
      <>
        <Carousel>
          {booksData.map((book, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src='https://placeimg.com/300/300/any/grayscale'
                alt={book.name}
              />
              <Carousel.Caption>
                <h3>{book.name}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}

        </Carousel>
      </>
    );
  }
}

export default withAuth0(BestBooks);
