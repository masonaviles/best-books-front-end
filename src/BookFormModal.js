import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookFormModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
              Enter New Book
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <Form.Label>Name: </Form.Label>
              <Form.Control type="text" placeholder="title of book" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description: </Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="description of book" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Status: </Form.Label>
              <Form.Control type="text" placeholder="status" />
            </Form.Group>

          </Modal.Body>

          <Modal.Footer>
            <Button type="submit" onClick={(e) => this.props.createNewBook(e)}>Submit</Button>
          </Modal.Footer>

        </Modal>
      </>
    );
  }

}

export default BookFormModal;
