import React from 'react';
const SinglePet = (props) => {
    return ( 
        <>
       <h1>{props.pet.name}</h1> 
       <p>{props.pet.category}</p> 
       </>
     );
}

export default SinglePet;