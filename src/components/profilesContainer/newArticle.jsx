import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NewArticle = (props) => {
    let navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const [isValidState, setIsValidState] = useState({valid: true, message: ""})
    const [newArticle, setNewArticle] = useState({
        // user: "",
        body: "",
        petname: "",
        category: "",
        breed: "",
        state: "",
        city: "",
        img: "",
    })
    const submitNewArticle = async (e) => {
        e.preventDefault()
        let validSubmission = true
        console.log(newArticle)
        // if it is a validsubmission we can create and set new item 
        if (validSubmission) {
            props.createNewArticle(newArticle)
            setNewArticle({
                body: "",
                petname: "",
                category: "",
                breed: "",
                state: "",
                city: "",
                img: "",
            })

            // set the valid state to true to show message
            setIsValidState({
                valid: true,
                message: ""
            })
            navigate('/home');

        }
    }
    // ------------- FUNCTIONS ---------------
    const handleInputChange = (e) => {
        // recall function
        setNewArticle({
            // list out all the old objects
            ...newArticle,
            // finds the value and sets it 
            [e.target.name]: e.target.value,
        })
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow} className="custom-btn">
                Create
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new article!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* this will make the showing set from true to false and close out the div */}
                    {/* create the onSubmit form */}
                    <Form onSubmit={submitNewArticle}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Pet Name:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="petname" value={newArticle.petname} />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Category:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="category" value={newArticle.category} />
                        </Form.Group> */}

                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={handleInputChange}
                                type="text"
                                name="category"
                                value={newArticle.category}
                            >
                                <option > select one </option>
                                <option>Dog</option>
                                <option>Cat</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Breed:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="breed" value={newArticle.breed} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Fun facts about your pet:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="body" value={newArticle.body} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>City:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="city" value={newArticle.city} />
                        </Form.Group>
                        <Form.Label>State:</Form.Label>
                        <Form.Control onChange={handleInputChange} type="text" name="state" value={newArticle.state} />
                        <Form.Label>Img:</Form.Label>
                        <Form.Control onChange={handleInputChange} type="text" name="img" value={newArticle.img} />
{/* 
                        <input type="file" onChange={(e) => handleFiles(e.target.files)} name="img" defaultValue={newArticle.img} ></input> */}


                        <Button type="submit" onClick={handleClose}>
                            Add
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NewArticle