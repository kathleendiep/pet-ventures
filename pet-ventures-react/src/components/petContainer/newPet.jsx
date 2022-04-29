import React, { useState, useRef } from 'react';
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
        img: "",
    })

    const fileSelect = useRef(null);
    const [image, setImage] = useState();
    const [progress, setProgress] = useState(0);
  
    async function handleImageUpload() {
      if (fileSelect) {
        fileSelect.current.click();
      }
    }
    // ------------- FUNCTIONS ---------------
    const handleInputChange = (e) => {
        // recall function
        setNewPet({
            // list out all the old objects
            ...newPet,
            // finds the value and sets it 
            [e.target.name]: e.target.value,
        })
    }
    async function handleImageUpload() {
        if (fileSelect) {
          fileSelect.current.click();
        }
      }
    
      function handleFiles(files) {
        console.log("handleFiles");
        console.log(files);
        for (let i = 0; i < files.length; i++) {
          console.log(files[i]);
          uploadFile(files[i]);
        }
      }
    function uploadFile(file) {
        const url = `https://api.cloudinary.com/v1_1/katdiep/upload`;
        const unsigned = 'cloudinary_unsigned';
        const xhr = new XMLHttpRequest();
        const fd = new FormData();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        // Update progress (can be used to show progress indicator)
        xhr.upload.addEventListener("progress", (e) => {
          setProgress(Math.round((e.loaded * 100.0) / e.total));
          console.log(Math.round((e.loaded * 100.0) / e.total));
        });
    
        xhr.onreadystatechange = (e) => {
          if (xhr.readyState == 4 && xhr.status == 200) {
            const response = JSON.parse(xhr.responseText);
            setImage(response.secure_url);
            const imageFile = response.secure_url;
            // console.log(response.secure_url);
            setNewPet({
                ...newPet,
                img: imageFile,
            })
          }
        };
    
        fd.append(
          "upload_preset",
          unsigned
        );
        fd.append("tags", "browser_upload");
        fd.append("file", file);
        xhr.send(fd);
      }



    const submitNewPet = async (e) => {
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
            console.log("this is image", image)
            props.createNewPet(newPet)
            setNewPet({
                name: "",
                category: "",
                breed: "",
                info: "",
                city: "",
                state: "",
                img: ""
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
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Category:</Form.Label>
                            <Form.Control onChange={handleInputChange} type="text" name="category" value={newPet.category} />
                        </Form.Group> */}

                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={handleInputChange}
                                type="text"
                                name="category"
                                value={newPet.category}
                            >
                                <option > select one </option>
                                <option>Dog</option>
                                <option>Cat</option>
                            </Form.Control>
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
             
                        <input type="file" onChange={(e) => handleFiles(e.target.files)} name="img" defaultValue={newPet.img} ></input>

                
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