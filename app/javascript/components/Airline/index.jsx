import React, { useEffect, useState } from "react";
import { AirlineHeader } from "../AirlineHeader";
import { ReviewForm } from "../ReviewForm";
import { Review } from "../Review";

import { reviewSubmitHandlr } from "./handlrs";
import { useAirline } from "./customHooks";

export const Airline = props => {  
    const { airlineAttr, setAirlineAttr, reviews, setReviews, loaded,} = useAirline();

    return (
        <div className="airline-wrapper">
            <div className="airline-column"> 
                { loaded && 
                    <AirlineHeader
                        attributes = {airlineAttr}
                        reviews= {reviews}/> 
                }            
                <div className="airline-reviews">
                    {reviews.map(review => (
                        <Review
                            key={review.id}
                            setReviews={setReviews}
                            review={review}
                            setAirlineAttr={setAirlineAttr}/>
                    ))}
                </div>               
            </div>
            <div className="airline-column">   
                { loaded &&
                    <ReviewForm
                        attributes={airlineAttr}
                        submitted={reviewSubmitHandlr}
                        setReviews={setReviews}
                        setAirlineAttr={setAirlineAttr}
                    />
                }             
            </div>
        </div>
    )
}; 