import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import axios from 'axios';
const NewPet = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    console.log("what is going on")
    setShow(true)
  }
  const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
  let navigate = useNavigate()
  const [newPet, setNewPet] = useState({
    name: "",
    category: "",
    breed: "",
    info: "",
    city: "",
    state: "",
    img: "",
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

  const handleImageChange = (e) => {
    setNewPet({
        ...newPet,
        img: e.target.files[0]
    })
    console.log(newPet);
    }
  const submitNewPet = async (e) => {
    e.preventDefault()
      const url = `https://api.cloudinary.com/v1_1/katdiep/upload`;
    // const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME}/upload`;
    const unsigned = 'cloudinary_unsigned';


    xhr.send(fd);
    
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
      if(newPet.img){
          const fd = new FormData()
          fd.append('file', newPet.img),
          fd.append( "upload_preset", unsigned
            //   process.env.NEXT_PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET
          );
          console.log(newPet.img)
          const imageUpload = await axios.post(url, fd)
          console.log(imageUpload.data.url)
        newPet.img = await imageUpload.data.url
      }
    props.createNewPet(newPet)
    // 1. set the voyager
    setNewPet({
      name: "",
      category: "",
      breed: "",
      info: "",
      city: "",
      state: "",
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
          <Form.Label>Upload Image:</Form.Label>

          {/* {image ? (
        <img
          className="object-contain rounded-lg"
          src={image.replace("upload/", "upload/w_600/")}
          style={{ height: 400, width: 600 }}
        />
      ) : (
        <div
          className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg"
          style={{ height: 400, width: 600 }}
        >
          <form className="flex justify-center items-center h-full">
            {progress === 0 ? (
              <div className="text-gray-700 text-center">
                <button
                  className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded block m-auto"
                  onClick={handleImageUpload}
                  type="button"
                  value={newPet.img}
                  name="img"
                >
                  Browse
                </button>
              </div>
            ) : (
              <span className="text-gray-700">{progress}%</span>
            )}

            <input
              ref={fileSelect}
              type="file"
              accept="image/*"
              value={newPet.img}
              name="img"
              style={{ display: "none" }}
              onChange={(e) => handleFiles(e.target.files)}
            />
          </form>
        </div>
      )} */}
          <input type="file" onChange={handleImageChange} name="img" value={newPet.img} ></input>
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