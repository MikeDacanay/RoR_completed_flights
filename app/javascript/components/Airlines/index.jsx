import React, { useState, useEffect } from "react";
import { useAirlines } from "./customHooks";
import { airlinesItems } from "./partials";

export const Airlines = props => {
  const { airlines, setAirlines} = useAirlines();

  return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <div className="subheader">Honest, unbiased airlines reviewed.</div>
      </div>
      <ul className="Airlines">
        {airlinesItems(airlines, setAirlines)}
      </ul>
    </div>
  )
}; 