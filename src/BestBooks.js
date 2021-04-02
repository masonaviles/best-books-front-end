import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';
import { Container } from 'react-bootstrap';
import UpdateFormModal from './UpdateFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookName: '',
      bookDescription: '',
      bookStatus: '',
      showModal: false,
      displayUpdateModal: false,
      chosenBook: {},
      indexOfChosenBook: -1
    };
    // const user = this.props.auth0;
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }


  async componentDidMount() {
    // console.log('inside getbooks');
    try {
      const SERVER = process.env.REACT_APP_SERVER || 'http://localhost:3001';
      const bookReader = await axios.get(`${SERVER}/books`, { params: { email: this.props.auth0.user.email } });

      // console.log('books: ', bookReader.data.books);
      // console.log('try block user auth0', this.props.auth0.user);

      this.setState({ books: bookReader.data.books });
    } catch (error) {
      console.error(error);
    }
  }

  handleName = (bookName) => this.setState({ bookName });
  handleDescription = (bookDescription) => this.setState({ bookDescription });
  handleStatus = (bookStatus) => {
    console.log('update modal', this.state.indexOfChosenBook);
    this.setState({ bookStatus });};

  deleteItem = async(index) => {
    // use axios to call our API to delete the book at the index specified
    const SERVER = 'http://localhost:3001';
    const newBooks = await axios.delete(`${SERVER}/books/${index}`, {params: {email: this.props.auth0.user.email}});
    console.log('after delete success', newBooks.data);

    // update our books state with the array of books that are NOT deleted
    const newBookArray = this.state.books.filter((book, i) => {
      return index !== i;
    });
    this.setState({ books: newBookArray });
    // console.log('newBookArray in delete', newBookArray);
  }

  createNewBook = async (e) => {
    e.preventDefault();
    const SERVER = 'http://localhost:3001';
    const bookReader = await axios.post(`${SERVER}/books`, { email: this.props.auth0.user.email, name: this.state.bookName, description: this.state.bookDescription, status: this.state.bookStatus });
    // console.log('bookreader', bookReader);
    this.setState({ books: bookReader.data, showModal: false});
    console.log('updated book?', this.state.books);
  }


  displayUpdateModal = (index) => {
    console.log('index', index);
    const chosenBook = this.state.books[index];
    this.setState({ chosenBook, indexOfChosenBook: index });
    this.setState({ displayUpdateModal: true });
  
  }

  replaceBook = async(e) => {
    e.preventDefault();
    const SERVER = 'http://localhost:3001';
    const chosenBook = this.state.books[this.state.indexOfChosenBook];
    const book = { 
      name: chosenBook.name,
      description: chosenBook.description,
      status: this.state.bookStatus };


    this.state.books.splice(this.state.indexOfChosenBook, 1, book);

    const updatedBooksArray = await axios.put(`${SERVER}/books/${this.state.indexOfChosenBook}`, {email: this.props.auth0.user.email, book: book} );

    console.log('after update new array:', updatedBooksArray.data);
    this.setState({ books: updatedBooksArray.data, displayUpdateModal: false });
  }



  render() {
    // let booksData = this.state.books;
    console.log('user auth0', this.props.auth0.user.email);
    // console.log('best boooks', this.state.books);
    return (
      <>
        <Container className="mb-3">
          <Button onClick={this.openModal}>Add Book</Button>
        </Container>
        <Carousel>
          {this.state.books.map((book, index) => (
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
                <Button variant="danger" onClick={() => this.deleteItem(index)}>delete</Button>
                <Button variant="info" onClick={() => this.displayUpdateModal(index)}>update</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}

        </Carousel>
        {/* } */}
        <BookFormModal
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          createNewBook={this.createNewBook}
          newBooks={this.state.newBooks}
          handleName={this.handleName}
          handleDescription={this.handleDescription}
          handleStatus={this.handleStatus}
        />
        <UpdateFormModal
          displayUpdateModal={this.state.displayUpdateModal}
          chosenBook={this.state.chosenBook}
          handleStatus={this.handleStatus}
          replaceBook={this.replaceBook}
        />
      </>
    );
  }
}

export default withAuth0(BestBooks);
