import React from "react";
import { useState, useEffect, useRef } from "react";
import NewPet from "./newPet";
import SinglePet from "./singlePet";
import { Navigate } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import CustomRightArrow from './customRightArrow.jsx' 
import "react-multi-carousel/lib/styles.css";
import './pet.scss';
import {useCookies} from 'react-cookie';

const PetContainer = (props) => {
    const [pets, setPets] = useState([]);
    const [requestError, setRequestError] = useState("")
    const createNewPet = async (newPet) => {
        // const token = localStorage.getItem('mytoken')
        const apiResponse = await fetch(`https://pet-ventures-api.herokuapp.com/api/pets/`, {
            method: "POST",
            body: JSON.stringify(newPet),
            headers: {
                "Content-Type": "application/json",
                // 'Authorization':`Token ${token}` 
            }
        })
    
        const parsedResponse = await apiResponse.json();
        // make sure it shows: {success:true,data: object}
        console.log(parsedResponse)
        // if it is successful, thn add to items
        if (parsedResponse.success) {
            setPets([parsedResponse.data, ...pets])

        } else {
            // setNewItemsServerError(parsedResponse.data)
            console.log(parsedResponse.error)
        }
    }

    const deletePet = async (idToDelete) => {
        const deleteResponse = await fetch(`https://pet-ventures-api.herokuapp.com/api/pets/${idToDelete}`, {
            method: "DELETE"
        })
        // did not need to do the parsedResponse parsedResponse = await apiResponse.json()
        if (deleteResponse.status == 204) {
            console.log(deleteResponse.status)
            const newPets = pets.filter(pet => pet.id !== idToDelete)
            setPets(newPets)
        }
    }
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }
    useEffect(() => {
        fetch('https://pet-ventures-api.herokuapp.com/api/pets/', {
            'method': 'GET',
            headers: {
                "Content-Type": "application/json",
                // 'Authorization':`Token 
            }
        })
            .then(resp => resp.json())
            .then(resp => setPets(resp))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
        <div className="home"> 
        <div>
            <span className="pet-title">Check out some pets!</span>
        </div>
        <div className="underline"></div>
        </div>
            <span>
                <NewPet
                    createNewPet={createNewPet}
                    token={props.token}
                />
            </span>
            {/* <Carousel

className="outer-container"
swipeable={true}
draggable={true}
showDots={true}
responsive={responsive}
ssr={true} // means to render carousel on server-side.
infinite={true}
autoPlaySpeed={1000}
keyBoardControl={true}
customTransition="all .5"
transitionDuration={500}
containerClass="carousel-container"
// deviceType={deviceType}
dotListClass="custom-dot-list-style"
itemClass="carousel-item-padding-40-px"
customRightArrow={<CustomRightArrow />} 
> */}
      <div className="outer-container">
     
                {pets.map((pet) => {
                    return <SinglePet
                        key={pet.id}
                        pet={pet}
                        pets={pets}
                        deletePet={deletePet}
                        className="inner"
                    >
                 
                    </SinglePet>
                })}

         </div> 

        </>
    );
}
export default PetContainer
