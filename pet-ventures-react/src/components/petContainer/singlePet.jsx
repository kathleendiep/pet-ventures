import React from 'react';
const SinglePet = (props) => {
    return ( 
        <>
       <h1>{props.pet.name}</h1> 
       <p>{props.pet.category}</p> 
       <p>{props.pet.username}</p> 
       </>
     );
}

export default SinglePet;