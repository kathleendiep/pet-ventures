import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const NewPet = (props) => {
    let navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const [isValidState, setIsValidState] = useState({valid: true, message: ""})
    // FORM
    const [showing, setShowing] = useState(false)
    // function that setShowing function as TRUE! = !true when clicked on 
    const toggleShowing = () => {
        // 2. set variable to the opposite
        setShowing(!showing)
    }
    const [newPet, setNewPet] = useState({
        name: "",
        category: "",
        breed: "",
        info: "",
        city: "",
        state: "",
    })

    // ------------- FUNCTIONS ---------------
    const handleInputChange = (e) => {
        // recall function
        setNewPet({
            // list out all the old objects
            ...newPet,
            // finds the value and sets it 
            [e.target.name]: e.target.value
        })
    }
    const submitNewPet = (e) => {
        e.preventDefault()
        let validSubmission = true;
        // front end validation 
        if (newPet.name.length < 2) {
            setIsValidState({
                valid: false,
                message: "Name needs to be longer"
            })
            validSubmission = false;
        }

        // if it is a validsubmission we can create and set new item 
        if (validSubmission) {
            // from parent function
            props.createNewPet(newPet)
            // 1. set the voyager
            setNewPet({
                name: "",
                category: "",
                breed: "",
                info: "",
                city: "",
                state: "",
            })
            // set the valid state to true to show message
            setIsValidState({
                valid: true,
                message: ""
            })
            navigate('/home');

        }
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow} className="custom-btn">
                Create
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new pet!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* this will make the showing set from true to false and close out the div */}
                    {/* create the onSubmit form */}
                    <Form onSubmit={submitNewPet}>
                        {/* if isValidState.valid return null, else - show an error  */}
                        {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                        {/* if there is a server error then show there is an error */}
                        {props.newItemServerError ? <p className="form-error">{props.newItemsServerError}</p> : null}
                        {/* onChange listens to whats in here based on function - put this on both*/}
                        {/* name needs to be same as model schema */}
                        {/* data binding - backend and front end sync */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Pet Name:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="name" value={newPet.name} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Category:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="category" value={newPet.category} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Breed:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="breed" value={newPet.breed} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Fun facts about your pet:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="info" value={newPet.info} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail"> 
                            <Form.Label>City:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="city" value={newPet.city} />
                        </Form.Group>
                            <Form.Label>State:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="state" value={newPet.state} />
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image Link:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="image" value={newPet.image} />
                        </Form.Group> */}
                        <Button type="submit" onClick={handleClose}>
                            Add
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NewPet;