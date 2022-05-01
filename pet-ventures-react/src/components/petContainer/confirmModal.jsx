
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './modal.scss'
import { Icon } from '@iconify/react';

const ConfirmModal = (props) => {
    return (
      <>
        <Button variant="primary" className="btn btn-danger action-button" onClick={props.handleShowDelete}>
        <Icon icon="fluent:delete-16-filled" width="3vw" height="3vh" />
        </Button>
        <Modal show={props.deleteModal} onHide={props.handleCloseDelete} className="confirm-modal">
          <Modal.Header closeButton className="confirm-modal">
            <Modal.Title>Are you sure you want to delete {props.pet.name} </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
          <div className="col">
            <Button className="button-modal text-link" onClick={props.handleCloseDelete}>
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