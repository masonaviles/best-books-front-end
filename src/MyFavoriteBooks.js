import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myFavoriteBooks.css';
import BestBooks from './BestBooks';
import { Container, Jumbotron } from 'react-bootstrap';


class MyFavoriteBooks extends React.Component {
  render() {
    return (
      <Jumbotron>
        <Container>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
        </Container>
        <BestBooks />
      </Jumbotron>
    );
  }
}

export default MyFavoriteBooks;
