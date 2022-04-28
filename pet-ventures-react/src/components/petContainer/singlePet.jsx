import React from 'react';
import Post from '../../Post';
 import {useCookies} from 'react-cookie';
const SinglePet = (props) => {
  const [token] = useCookies(['mytoken'])



  const deleteBtn = (pet) => {
       Post.DeleteArticle(pet.id, token['mytoken'])
       .then(() => props.deleteBtn(pet))
       .catch(error => console.log(error))
      
  }
  return ( 
        <>
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
<div className = "col">
          <button onClick = {() => props.deletePet(props.pet.id)} className = "btn btn-danger">Delete</button>
          </div>
{/* <div className = "col">
          <button onClick = {() => deleteBtn(props.pet)} className = "btn btn-danger">Delete</button>
          </div> */}
                </div>
            </div>
          </div>
        </div>
        </div>

      </>
      );
}

      export default SinglePet;