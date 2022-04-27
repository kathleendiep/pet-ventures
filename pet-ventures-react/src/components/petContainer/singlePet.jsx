import React from 'react';
const SinglePet = (props) => {
  return ( 
        <>
      <div className="single-item-component">
        <div class="cards">
          <div class="card">
            <div class="img">
              {/* <img className="image-voyager" src=></img> */}
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
            </div>
          </div>
        </div>
        </div>

      </>
      );
}

      export default SinglePet;