import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      newBook: [],
      showModal: false,
    };
    // const user = this.props.auth0;
  }

  openModal = () => {
    this.setState({ showModal: true});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }


  async componentDidMount() {
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
  }

  createNewBook = async (e) => {
    e.preventDefault();
    const SERVER = 'http://localhost:3001';
    const bookReader = await axios.post(`${SERVER}/books`, { email: this.props.auth0.user.email, newBook: this.state.newBook });
    this.setState({ books: bookReader.data.books });
  }

  render() {
    let booksData = this.state.books;
    console.log('user auth0', this.props.auth0.user.email);
    // console.log('best boooks', this.state.books);
    return (
      <>
        <Button onClick={openModal}>Add Book</Button>
        {this.state.books.length > 0 &&
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
        }
        <BookFormModal
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          createNewBook={this.createNewBook}
        />
      </>
    );
  }
}

export default withAuth0(BestBooks);
