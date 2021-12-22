import React from "react";
import { Airline } from "../Airline";
import { deleteAirlineHandlr } from './handlrs';
import { Link } from "react-router-dom";

export const airlinesItems = (airlines, setAirlines) => (
    airlines.map(airline => {
        const {attributes: {
			img_url,
			name,
			avg_score,
			slug
		}} = airline;

        return (
          <li className="airline" key={name}>
            {/* <Airline
              attributes={attributes}/> */}
          
            <div className="card">
                <img 
                    src={img_url} 
                    alt={name} 
                    className="airline-logo"
                    width='50px'
                    height='50px'/>
                <div className="airline-name">{name}</div>
                <div className="airline-score">Score: {avg_score}</div>
                <Link to={`/airlines/${slug}`} className="airline-link">View Airline</Link>
                <button onClick={() => deleteAirlineHandlr(slug, setAirlines)}>Delete</button>
            </div>
          </li>
        )
    })
);