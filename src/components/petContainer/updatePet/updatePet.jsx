import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Icon } from '@iconify/react';
const UpdatePet = (props) => {

    return (
        <>
        <Button variant="primary" onClick={props.handleShow} className="action-button">
        <Icon icon="ic:baseline-tips-and-updates" width="2vw" height="2vh" />
        </Button>
        <Modal show={props.show} onHide={props.handleClose} className="modal-body">
          <Modal.Header closeButton>
            <Modal.Title className="text-gradient">  Update {props.updatePet.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* this will make the showing set from true to false and close out the div */}
            {/* create the onSubmit form */}
            <Form  onSubmit={(e) => { e.preventDefault(); props.updatingPet(props.updatePet.id) }}>
          <div className="card">
            <div className="img">
              <img className="image-voyager" src={props.updatePet.img}></img>
            </div>
            </div>
              <Form.Group className="mb-3" >
                <Form.Label>Pet Name:</Form.Label>
                <Form.Control onChange={props.handleInputChange} type="text" name="name" value={props.updatePet.name} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  value={props.updatePet.category}
                  onChange={props.handleInputChange}
                  type="text" name="category"
                >
                  <option>Dog</option>
                  <option>Cat</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Breed:</Form.Label>
                <Form.Control onChange={props.handleInputChange} type="text" name="breed" value={props.updatePet.breed} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Fun facts about your pet:</Form.Label>
                <Form.Control onChange={props.handleInputChange} type="text" name="info" value={props.updatePet.info} placeholder="ex: what does your pet like to do for fun?" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>City:</Form.Label>
                <Form.Control onChange={props.handleInputChange} type="text" name="city" value={props.updatePet.city} />
              </Form.Group>
              <Form.Label>State:</Form.Label>
              <Form.Control onChange={props.handleInputChange} type="text" name="state" value={props.updatePet.state} />
               {/* <input type="file" onChange={props.handleInputChange}  name="img" defaultValue={props.updatePet.img}/>  */}
              <Button type="submit" onClick={props.handleClose}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    )
}
export default UpdatePet