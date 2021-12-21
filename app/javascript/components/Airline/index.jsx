import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { tryCatchHandlr } from "../../shared/helpers";
import { AirlineHeader } from "../AirlineHeader";
import axios from 'axios';

export const Airline = props => {  
    const [ airlineAttr, setAirlineAttr ] = useState({});
    const [ review, setReview ] = useState({});
    const [ loaded, setLoaded] = useState(false);
    const { slug }= useParams();

    useEffect(() => {
        (async() => {
            const response = axios.get(`/api/v1/airlines/${slug}`); 

            const [data, error] = await tryCatchHandlr(response);

            if(data){              
                const {data: info, included} = data; 
                setAirlineAttr({...info, ...included});
                setLoaded(true)
            }
        })()
    }, [])

    return (
        <div className="airline-wrapper">
            <div className="airline-column"> 
                { loaded && 
                    <AirlineHeader
                        attributes = {{...airlineAttr.data.attributes}}
                        reviews= {[...airlineAttr.included]}/> 
                }            
                <div className="reviews"></div>               
            </div>
            <div className="airline-column">                
                <div className="review-form">'Review Form Goes Here'</div>
            </div>
        </div>
    )
}; 