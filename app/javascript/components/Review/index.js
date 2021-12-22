import React from "react";
import { deleteReviewHandlr } from "./handlrs";

export const Review = props => {
    const { review, setReviews, setAirlineAttr } = props;
    const { 
        id,
        attributes: {
            title, 
            description,
            score,            
        }
    } = review; 

    return (
        <div className="Review">
            <h3 className="Review--title">TITLE:  {title}</h3>
            <h6 className="='Review--score">SCORE: {score}</h6>
            <h5 className="Review--description">DESCRIPTION: {description}</h5>

            <button onClick={() => deleteReviewHandlr(id, setReviews, setAirlineAttr)}>Destroy</button>      
        </div>
    )
}; 