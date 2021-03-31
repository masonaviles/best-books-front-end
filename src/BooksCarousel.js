import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

class BooksCarousel extends React.Component {
  render() {

    return (
      <>
        <Carousel>

          <Carousel.Item>
            <Carousel.Caption>
              <h3>{this.props.name}</h3>
              <p>{this.props.description}</p>
              <p>{this.props.status}</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </>
    );

  }

}

export default BooksCarousel;
