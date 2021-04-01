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
            <Form>
              <Form.Group>
                <Form.Label>Name: </Form.Label>
                <Form.Control name="name" type="text" placeholder="title of book" onChange={(e) => this.props.handleName(e.target.value)} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description: </Form.Label>
                <Form.Control as="textarea" rows={3} name="description" placeholder="description of book" onChange={(e) => this.props.handleDescription(e.target.value)} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Status: </Form.Label>
                <Form.Control type="text" placeholder="status" name="status" onChange={(e) => this.props.handleStatus(e.target.value)} />
              </Form.Group>
              <Button type="submit" onClick={(e) => this.props.createNewBook(e)}>Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

}

export default BookFormModal;
