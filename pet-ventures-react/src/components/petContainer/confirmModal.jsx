
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './modal.scss'

const ConfirmModal = (props) => {
    return (
      <>
        <Button variant="primary" onClick={props.handleShowDelete}>
          Delete
        </Button>
        <Modal show={props.deleteModal} onHide={props.handleCloseDelete} className="modal-body">
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete? </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
          <div className="col">
            <Button variant="secondary" onClick={props.handleCloseDelete}>
              Nevermind! 
            </Button>
            </div>
            <div className="col">
                  <Button onClick={() => props.deletePet(props.pet.id)} className="btn btn-danger">Delete</Button>
            </div>

          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ConfirmModal;