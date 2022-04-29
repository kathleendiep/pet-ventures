import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import UpdatePet from './updatePet/updatePet';
import ConfirmModal from './confirmModal';
import './pet.scss';

const SinglePet = (props) => {
  const [showing, setShowing] = useState(false)
  const toggleShowing = () => {
    setShowing(!showing)
  }
  let navigate = useNavigate()
  const [deleteModal, setDeleteModal] = useState(false);
  const handleCloseDelete = () => {
      setDeleteModal(false);
  }

  const handleShowDelete = () => setDeleteModal(true);

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
              {/* <h3 className="card-jobtitle">{props.pet.category}</h3> */}
              <li className="card-jobtitle">{props.pet.breed}</li>
              <div class="card-city"><i className="from">from</i> {props.pet.city}, {props.pet.state}</div>
              <div class="card-content">
                <div class="card-subtitle">ABOUT</div>
                <p class="card-desc">{props.pet.info}</p>
              </div>
              <div class="card-buttons">
                {/* ---------------- delete button ---------------- */}
                <ConfirmModal
                  handleCloseDelete={handleCloseDelete}
                  handleShowDelete={handleShowDelete}
                  deleteModal={deleteModal}
                  deletePet={props.deletePet}
                  pet={props.pet}
                />
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