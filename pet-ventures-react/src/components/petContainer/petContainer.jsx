import React from "react";
import { useState, useEffect, useRef } from "react";
import NewPet from "./newPet";
import SinglePet from "./singlePet";
import { Navigate } from 'react-router-dom'
const PetContainer = () => {
    const [pets, setPets] = useState([]);
    const [requestError, setRequestError] = useState("")
    const createNewPet = async (newPet) => {
        console.log("Let's create this!");
        // newPet.img = image
        const apiResponse = await fetch(`https://pet-ventures-api.herokuapp.com/api/pets/`, {
            method: "POST",
            body: JSON.stringify(newPet),
            headers: {
                "Content-Type": "application/json"
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
            const newPets = pets.filter(pet=> pet.id !== idToDelete)
            setPets(newPets)
            }
        }
    
        const updatePet = async (idToUpdate, petToUpdate) => {
            const apiResponse = await fetch(`https://pet-ventures-api.herokuapp.com/api/pets/${idToUpdate}`,{
                method: "PUT",
                body: JSON.stringify(petToUpdate),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await apiResponse.json();
            if (parsedResponse.success){
                const newPets = pets.map(pet=> pet.id  === idToUpdate ? petToUpdate : pet )
                setPets(newPets)
            }else{
                setRequestError(parsedResponse.data)
         }
        }
    useEffect(() => {
        fetch('https://pet-ventures-api.herokuapp.com/api/pets/', {
            'method': 'GET',
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "Token 0981aae18064eab63095444c81acc49776eb93a6"
            }
        })
        .then(resp=> resp.json())
        .then(resp=> setPets(resp))
        .catch(error=> console.log(error))
    }, [])
    return (
        <>
            <h1>pets go here</h1>
            <span>
                <NewPet
                    createNewPet={createNewPet}
                />
            </span>
            {pets.map((pet)=>{
                return <SinglePet key={pet.id} pet={pet} deletePet={deletePet} updatePet={updatePet}/>
            })}
        </>
    );
}

export default PetContainer
