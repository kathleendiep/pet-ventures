import React from "react";
import { useState, useEffect } from "react";
import NewArticle from "./newArticle";
import SingleArticle from "./singleArticle";

const ProfilesContainer = (props) => {
    const [articles, setArticles] = useState([]);
    // const [requestError, setRequestError] = useState("")
    const createNewArticle = async (newArticle) => {
        console.log("Let's create this!");
        const apiResponse = await fetch(`https://pet-ventures-api.herokuapp.com/api/articles/`, {
            method: "POST",
            body: JSON.stringify(newArticle),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await apiResponse.json();
        // make sure it shows: {success:true,data: object}
        console.log(parsedResponse)
        // if it is successful, thn add to items
        if (parsedResponse.success) {
            setArticles([parsedResponse.data, ...articles])

        } else {
            // setNewItemsServerError(parsedResponse.data)
            console.log(parsedResponse.error)
        }
    }

    // const deletePet = async (idToDelete) => {
    //     const deleteResponse = await fetch(`https://pet-ventures-api.herokuapp.com/api/pets/${idToDelete}`, {
    //         method: "DELETE"
    //     })
    //     // did not need to do the parsedResponse parsedResponse = await apiResponse.json()
    //     if (deleteResponse.status == 204) {
    //         console.log(deleteResponse.status)
    //         const newPets = pets.filter(pet => pet.id !== idToDelete)
    //         setPets(newPets)
    //     }
    // }
    useEffect(() => {
        fetch('https://pet-ventures-api.herokuapp.com/api/articles', {
            'method': 'GET',
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "Token 0981aae18064eab63095444c81acc49776eb93a6"
            }
        })
            .then(resp => resp.json())
            .then(resp => setArticles(resp))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
        <div class="home"> 
        <div>
            <span className="pet-title">Check out some articles</span>
        </div>
        <div className="underline"></div>
        </div>
            <span>
                <NewArticle
                    createNewArticle={createNewArticle}
                />
            </span>
    
      <div className="outer-container">
     
                {articles.map((article) => {
                    return <SingleArticle
                        key={article.id}
                        article={article}
                        articles={articles}
                        className= "inner"
                    >
                 
                    </SingleArticle>
                })}

         </div> 

        </>
    );
}
export default ProfilesContainer
