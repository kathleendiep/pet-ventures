import React from "react";
import { useState, useEffect } from "react";
import NewPet from "./newPet";
import SinglePet from "./singlePet";

const PetContainer = () => {
    const [pets, setPets] = useState([]);
    const [newItemServerError, setNewItemsServerError] = useState("");
    const [requestError, setRequestError] = useState("")
    // INDEX: GET 
    const getPets = async () => {
        try {
            const voyagers = await fetch("http://localhost:8000/api/pets/", {
                'method': 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token 0981aae18064eab63095444c81acc49776eb93a6"
                }
            })
            const parsedVoyagers = await voyagers.json();
            setPets(parsedVoyagers.data)
        } catch (err) {
            console.log(err)
        }
    }
    const createNewPet = async (newPet) => {
        console.log("Let's create this!");
        console.log(newPet)
        // const apiResponse = await fetch("http://localhost:3001/voyagers/",{
        const apiResponse = await fetch("http://localhost:8000/api/pets/", {
            method: "POST",
            // stringify the object newVoyager
            body: JSON.stringify(newPet),
            // Boilerplate: its coming from json
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await apiResponse.json();
        // make sure it shows: {success:true,data: object}
        console.log(parsedResponse)
        // if it is successful, then add to items
        if (parsedResponse.success) {
            setPets([parsedResponse.data, ...pets])
        } else {
            // setNewItemsServerError(parsedResponse.data)
            console.log(parsedResponse.error)

        }
    }
    useEffect(() => {
        getPets();
    }, [])
    return (
        <>
            <h1>pets go here</h1>
            <span className="new-voyager-component">
                <NewPet
                createNewPet={createNewPet}
                newItemServerError={newItemServerError}
                setNewItemsServerError={setNewItemsServerError}
                />
            </span>
            {/* {pets.map((pet)=>{
                return <SinglePet key={pet._id} pet={pet}/>
            })} */}

        </>
    );
}

export default PetContainer
