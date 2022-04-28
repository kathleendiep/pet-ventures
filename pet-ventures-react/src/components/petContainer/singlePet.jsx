import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SinglePet = (props) => {
  const [showing, setShowing] = useState(false)
  const toggleShowing = () => {
    setShowing(!showing)
  }
  let navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);
  const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
  // update 
  const [updatePet, setUpdatePet] = useState({
    name: props.pet.name,
    category: props.pet.category,
    breed: props.pet.breed,
    info: props.pet.info,
    city: props.pet.city,
    state: props.pet.state,
    img: props.pet.img,
    id: props.pet.id,
  })
  const handleInputChange = (e) => {
    // recall the function and set it 
    setUpdatePet({
      ...updatePet,
      // finds the name and sets to value
      // make sure to put in brackets - 
      // e.target.value - whatever is entered into the search input 
      [e.target.name]: e.target.value
    })
  }
  // 1. create this function to update an item 
  // we set validsubmission to true 
  const submitUpdatePet = (e) => {
    // preventDefault - if this does not get handled then it should not be taken as it normally would be
    e.preventDefault();
    //from the parent updateItem - get the id and update the item 
    props.updatePet(props.pet.id, updatePet)
    console.log("updatingItem!")
    // return < Redirect to="/" />;
  }

  return (

      <div className="single-item-component">
        <div class="cards">
          <div class="card">
            <div class="img">
              <img className="image-voyager" src={props.pet.img}></img>
            </div>
            <div class="card__body">
              <div class="card__color-picker">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h2 className="card-title">{props.pet.name}</h2>
              <h3 >{props.pet.category}</h3>
              <li className="card-jobtitle">{props.pet.breed}</li>
              <li>{props.pet.city}</li>
              <div class="card-content">
                <div class="card-subtitle">ABOUT</div>
                <p class="card-desc">{props.pet.infos}</p>
              </div>
              <div class="card-buttons">
                {/* ---------------- delete button ---------------- */}
                {/* <button onClick={()=>{
                // finds the id of item
                
                }}>Delete</button> */}
                <div className="col">
                  <button onClick={() => props.deletePet(props.pet.id)} className="btn btn-danger">Delete</button>
                </div>
                {/* ---------------- UPDATE --------------------- */}
                {/* if its showing = true, then show this create new form, else show CREATE NEW ITEM button*/}
                {/* by default, showing will be false, unless button clicked, then it will show true!  */}
                <>
                  <Button variant="primary" onClick={handleShow} className="custom-btn">
                    Update
                  </Button>
                  <Modal show={show} onHide={handleClose} className="modal-body">
                    <Modal.Header closeButton>
                      <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* this will make the showing set from true to false and close out the div */}
                      {/* create the onSubmit form */}
                      <Form onSubmit={submitUpdatePet}>
                        <Form.Group className="mb-3" >
                          <Form.Label>Pet Name:</Form.Label>
                          <Form.Control onChange={handleInputChange} type="text" name="name" value={updatePet.name} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Category</Form.Label>
                          <Form.Control
                            as="select"
                            value={updatePet.category}
                            onChange={handleInputChange}
                            type="text" name="category"
                          >
                            <option>Dog</option>
                            <option>Cat</option>
                          </Form.Control>
                        </Form.Group>


                        <Form.Group className="mb-3">
                          <Form.Label>Breed:</Form.Label>
                          <Form.Control onChange={handleInputChange} type="text" name="breed" value={updatePet.breed} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Fun facts about your pet:</Form.Label>
                          <Form.Control onChange={handleInputChange} type="text" name="info" value={updatePet.info} placeholder="ex: what does your pet like to do for fun?" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                          <Form.Label>City:</Form.Label>
                          <Form.Control onChange={handleInputChange} type="text" name="city" value={updatePet.city} />
                        </Form.Group>
                        <Form.Label>State:</Form.Label>
                        <Form.Control onChange={handleInputChange} type="text" name="state" value={updatePet.state} />
                        <Form.Group className="mb-3" >
                          <Form.Label>Image Link:</Form.Label>
                          <Form.Control onChange={handleInputChange} type="text" name="img" value={updatePet.img} />
                        </Form.Group>
                        <Button type="submit" onClick={handleClose}>
                          Submit
                        </Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </div>
          </div>
        </div>

      </div>
      );
}

      export default SinglePet;