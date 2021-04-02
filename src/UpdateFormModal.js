import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UpdateFormModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.displayUpdateModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Update Book
            </Modal.Title>
            <Button variant="dark" onClick={this.props.closeUpdateModal}>x</Button>
          </Modal.Header>

          <Modal.Body>
            <Form>

              <Form.Group>
                <Form.Label>Status: </Form.Label>
                <Form.Control type="text" placeholder={this.props.chosenBook.status} name="status" onChange={(e) => this.props.handleStatus(e.target.value)} />
              </Form.Group>

              <Button type="submit" onClick={(e) => this.props.replaceBook(e)}>Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

}

export default UpdateFormModal;
