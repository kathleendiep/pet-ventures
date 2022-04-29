import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UpdatePet from './updatePet/updatePet';
import './pet.scss';

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
      [e.target.name]: e.target.value,
    })
  }

  const updatingPet = async (idToUpdate) => {
    console.log("is this working")
    // get id from child and put it together
    const updateResponse = await fetch(`https://pet-ventures-api.herokuapp.com/api/pets/${idToUpdate}/`, {
        method: "PUT",
        body: JSON.stringify(updatePet),
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log("updating")
    console.log(updateResponse.status)
    if (updateResponse.status == 200) {
        const parsedResponse = await updateResponse.json()
        const newPets = props.pets.map(pet=> pet.id  === idToUpdate ? parsedResponse : pet )
        setUpdatePet(newPets)
    }
    console.log(updateResponse.status)
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
                <UpdatePet
                    pet={props.pet}
                    updatePet={updatePet}
                    setUpdatePet={setUpdatePet}
                    handleInputChange={handleInputChange}
                    updatingPet={updatingPet}
                    handleClose={handleClose}
                    handleShow={handleShow}
       
                    show={show}
                 />
                
                
              </div>
            </div>
          </div>
        </div>

      </div>
      );
}

      export default SinglePet;