import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class BookFormModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          showModal={this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Enter New Book
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>

          </Modal.Body>

          <Modal.Footer>
            <Button onClick={ }>Submit</Button>
          </Modal.Footer>

        </Modal>
      </>
    )
  }

}

export default BookFormModal;
