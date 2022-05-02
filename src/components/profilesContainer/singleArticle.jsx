import React from "react";
import { useState, useEffect } from "react";

const SingleArticle = (props) => {
    return (
        
        <> <h1>this is new articles </h1> 
        this is user id: {props.article.user}
        {props.article.body}
        {props.article.created_at}
        </>
    )
}

export default SingleArticle