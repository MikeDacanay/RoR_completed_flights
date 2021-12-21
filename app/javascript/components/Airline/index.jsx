import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { tryCatchHandlr } from "../../shared/helpers";
import { AirlineHeader } from "../AirlineHeader";
import axios from 'axios';

import { useAirline } from "./customHooks";

export const Airline = props => {  
    const { airlineAttr, loaded } = useAirline();

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